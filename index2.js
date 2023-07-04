const fs = require("fs");
const readline = require("readline");
const HelperFxn = require("./helper")
const fileStream = fs.createReadStream("./input/Typescript_OC9KBG959KH95A3K.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let starQuestiontReading = false;
let QuestionBlock = "";
let QuestionSection = [];

// Desired Question Block
 rl.on("line", (line) => {
  if (line.includes("Desired Question Start")) {
    starQuestiontReading = true;
    return;
  }

  if (line.includes("Desired Question End")) {
    starQuestiontReading = false;
    HelperFxn.desiredQuestionValidation(QuestionSection)
    rl.close();
    return;
  }
  if (starQuestiontReading) {
    if(line != ""){
      QuestionBlock+=line;
      QuestionSection.push(QuestionBlock); 
    }
  }

/*   if (starQuestiontReading) {
    const containsQuestion = HelperFxn.IsQuestion(line.trim());
    const validQuestion = HelperFxn.IsLanguageContained(line.trim());
    const ISNoun = HelperFxn.IsNounContained(line.trim());   
    if (line != "") {

      QuestionBlock+=line;
      QuestionSections.push(QuestionBlock); 
     
      if (containsQuestion && validQuestion && !ISNoun) {
        console.log('\x1b[32m Valid Desired Question\x1b[0m');
     
        console.log('\x1b[32m '+line+' \x1b[0m');
        return;
      } else {
        console.log('\x1b[31m Invalid Desired Question. Please Check\x1b[0m');
      }
    }
  } */
});


// Desired Answer Start

let startAnswer = false;
let AnswerBlock = "";
let AnswerSections = [];
rl.on("line", (line) => {
  if (line.includes("Desired Answer Start")) {
   
    startAnswer = true;   
    return;
  }

  if (line.includes("Desired Answer End")) {
    startAnswer = false;
    HelperFxn.desiredAnswerValidation(AnswerSections)
    rl.close();
    return;
  }

  if (startAnswer) {
  
  
    if (line != "") {
      AnswerBlock+=line;
      AnswerSections.push(AnswerBlock);  
    }
  }
  
});


 