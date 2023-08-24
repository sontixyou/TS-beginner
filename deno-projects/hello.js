#!/usr/bin/env -S deno run --allow-net --allow-read
function hello() {
  console.log("Hello,");
  return 1 + 1
}

hello();
