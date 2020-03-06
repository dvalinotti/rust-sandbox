import fs from 'fs';
import path from "path";
import getConfig from 'next/config';
import { exec, spawn } from "child_process";

const { serverRuntimeConfig } = getConfig()
type Request = {
  main: string
};

export default function(req: Request, callback: Function ) {
  // Write main content to rust file
  fs.writeFileSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, './rust/src/main.rs'), 
    req.main, {
      encoding: 'utf8',
      flag: 'w'
  });

  let output = "";

  let read = fs.readFileSync(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT, 
      './rust/src/main.rs'
    ));

  const run = spawn("cd rust && cargo run", {
    shell: true,
    detached: true,
  });
  
  run.stderr.on("data", data => {
      console.log(`stderr: ${data}`);
  });

  run.on('error', (error) => {
      console.log(`error: ${error.message}`);
  });

  run.on("close", code => {
      console.log(`child process exited with code ${code}`);
      callback(output);
  });

  run.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
    output += `${data}`;
  });
}
