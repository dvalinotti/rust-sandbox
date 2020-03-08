import fs from 'fs';
import path from "path";
import getConfig from 'next/config';
import { spawn, exec } from "child_process";

const { serverRuntimeConfig } = getConfig()
type Request = {
  main: string,
  token: string,
};

export default function(req: Request, callback: Function ) {
  // Write main content to rust file
  console.log("." + path.join(serverRuntimeConfig.PROJECT_ROOT, `/rust/run.sh`),  [`${req.token}`]);
  const script = spawn(path.join(serverRuntimeConfig.PROJECT_ROOT, `/rust/run.sh`),  [`${req.token}`]);
  script.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  script.on('error', (error) => {
    console.log(`error: ${error.message}`);
  });
  
  script.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
  });

  script.on("close", code => {
    console.log(`child process exited with code ${code}`);
    setTimeout(() => {
      fs.writeFileSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, `/rust/${req.token}/src/main.rs`), 
        req.main, {
          encoding: 'utf8',
          flag: 'w'
        });
      let output = "";
    
      const run = spawn(`cd ${path.join(serverRuntimeConfig.PROJECT_ROOT, `/rust/${req.token}`)} && cargo run `, {
        shell: true,
        detached: true,
      });
      
      run.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
      });
    
      run.on('error', (error) => {
        console.log(`error: ${error.message}`);
      });
      
      run.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
        output += `\n${data}`;
      });
    
      run.on("close", code => {
        console.log(`child process exited with code ${code}`);
        callback(output);
        run.kill();
      });  
    }, 2000);
  });
  
  script.on("exit", code => {
    console.log("EXIT " + code);
  });
  // console.log("Done");
}
