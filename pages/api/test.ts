import { NextApiRequest, NextApiResponse } from 'next'}

function handler(req: NextApiRequest, res: NextApiResponse ) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: "Hello World!"}));
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50kb',
    },
  },
}

export default handler;
