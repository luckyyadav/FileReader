const fs = require("fs");
const readline = require("readline");
const HelperFxn = require("./helper");
const fileStream = fs.createReadStream("./input/Typescript_OC9KBG959KH95A3K.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let starQuestiontReading = false;
let startAnswerReadingIntro = false;
let startAnswerReadingBacticsValidation = false;

// Desired Question Block
/* rl.on("line", (line) => {
  if (line.includes("Desired Question Start")) {
    starQuestiontReading = true;
    return;
  }

  if (line.includes("Desired Question End")) {
    starQuestiontReading = false;
    rl.close();
    return;
  }

  if (starQuestiontReading) {
    //const questionRegExp = /\?\s*$/;
    const isQuestion = /^\s*([Ww]ho|[Ww]hat|[Ww]hen|[Ww]here|[Ww]hy|[Hh]ow|[Ii]s|[Aa]re|[Cc]an|[Mm]ay|[Ss]hould|[Dd]o)\b.*\?\s*$|/;
    const hasLanguage = /(java|python|TypeScript|JavaScript|perl|php|ruby)/gi;
    const regexNoun = /\b(i|[Ww]e|[Yy]our|[Mm]e)\b/g;
    // \b(I|we|you|your)\b

    const containsQuestion = isQuestion.test(line.trim());
    const validQuestion = hasLanguage.test(line.trim());
    const ISNoun = regexNoun.test(line.trim());

    console.log(containsQuestion, validQuestion, !ISNoun);
    if (line != "") {
      if (containsQuestion && validQuestion && !ISNoun) {
        console.log("Valid Desired Question");
        console.log(line);
      } else {
        console.log("The text block does not contain a question.");
      }
    }
  }
});
 */

/* rl.on("line", (line) => {
  if (line.includes("Desired Answer Start")) {
    startAnswerReadingIntro = true;
    return;
  }

  if (line.includes("```")) {
    startAnswerReadingIntro = false;
    rl.close();
    return;
  }

  if (startAnswerReadingIntro) {
    if (line != "") {
      const regexForLanguage = /(java|python|TypeScript|JavaScript|Angular|AngularJS|perl|php|ruby)/gi;
      const literalString = /^\s*`\s{3}\s*$/gm;
      const regexNoun = /\b(i|[Ww]e|[Yy]our|[Mm]e)\b/g;

      const isValidParaGraph = regexForLanguage.test(line);
      const IsnoNoun = regexNoun.test(line);
      console.log(IsnoNoun);
      if (isValidParaGraph && !IsnoNoun) {
        console.log(line);
      }
    }
  }
});
 */

// Answer Start

// Code Part
let IsValidCode = false;
function isCode(str) {
  if (/({|}|if|for|while|switch|\(|\)|=|;|const|let|var)/.test(str)) {
    return true;
  }
  // otherwise assume it's a paragraph
  return false;
}

rl.on("line", (line) => {
  if (line.includes("``` ")) {
    startAnswerReadingBacticsValidation = true;
    return;
  }

  if (line.includes("```")) {
    IsValidCode = isCode(line);
    startAnswerReadingBacticsValidation = false;
    rl.close();
    return;
  }

  if (startAnswerReadingBacticsValidation) {
    if (line != "") {
      /*  const literalString =  /^\s*`\s{3}\s*$/gm;
          const isValidParaGraph = literalString.test(line);
         
          console.log(isValidParaGraph) */
      if (!!IsValidCode) {
        console.log("Code is not Valid Please Check!!!", "background: #222; color: #bada55");
      }
    }
  }
});

// All desired Answer

let startAnswer = false;

rl.on("line", (line) => {
  if (line.includes("Desired Answer Start")) {
    startAnswer = true;
    return;
  }

  if (line.includes("Desired Answer End")) {
    startAnswer = false;
    rl.close();
    return;
  }

  if (startAnswer) {
    if (line != "") {
      console.log(line);
    }
  }
});
