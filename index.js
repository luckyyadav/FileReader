const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('./input/Typescript_OC9KBG959KH95A3K.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

 /*  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    //console.log(`Line from file: ${line}`);
    if(line.includes("Desired Answer Start")){
        console.log("yes",line)
    }
  } */

  let afterCertainLine = false;
  rl.on('line',(line)=>{
    if(line.includes("Desired Question Start")){
        afterCertainLine = true;
    }
    if(afterCertainLine){
        const questionRegExp = /\?\s*$/;
        const containsQuestion = questionRegExp.test(line);
        if (containsQuestion) {
            console.log('Valid Desired Question');
          } else {
            console.log('The text block does not contain a question.');
          }
        console.log(line)
    }
  })
}

processLineByLine();

