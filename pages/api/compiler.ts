import { NextApiRequest, NextApiResponse } from 'next'
import compileRust from '../../services/compileRust';

function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { main } = req.body;
      // Check that main function content exists
      if (!main) {
        return res.status(400).json({
          status: 400,
          message: "Invalid request body."
        });
      }
    
      compileRust({ main }, (data: string) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
      
        res.end(JSON.stringify({ content: data }));
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message
    });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50kb',
    },
  },
}

export default handler;
