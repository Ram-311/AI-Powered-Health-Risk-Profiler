const Tesseract = require("tesseract.js");


async function parseTextInput(body) {
  const requiredFields = ["age", "smoker", "exercise", "diet"];
  const answers = {};
  let missing = [];

  for (let field of requiredFields) {
    if (body[field] !== undefined) answers[field] = body[field];
    else missing.push(field);
  }

  if (missing.length / requiredFields.length > 0.5) {
    return { status: "incomplete_profile", reason: ">50% fields missing" };
  }

  return { answers, missing_fields: missing, confidence: 1 };
}


async function parseImageInput(filePath) {
  const { data } = await Tesseract.recognize(filePath, "eng");
  const text = data.text;


  const answers = {};
  let missing = [];

  const ageMatch = text.match(/age[:\s]+(\d+)/i);
  const smokerMatch = text.match(/smoker[:\s]+(yes|no)/i);
  const exerciseMatch = text.match(/exercise[:\s]+(\w+)/i);
  const dietMatch = text.match(/diet[:\s]+([\w\s]+)/i);

  answers.age = ageMatch ? parseInt(ageMatch[1]) : undefined;
  answers.smoker = smokerMatch ? smokerMatch[1].toLowerCase() === "yes" : undefined;
  answers.exercise = exerciseMatch ? exerciseMatch[1].toLowerCase() : undefined;
  answers.diet = dietMatch ? dietMatch[1].toLowerCase() : undefined;

  for (let field of ["age", "smoker", "exercise", "diet"]) {
    if (!answers[field]) missing.push(field);
  }

  if (missing.length / 4 > 0.5) return { status: "incomplete_profile", reason: ">50% fields missing" };

  return { answers, missing_fields: missing, confidence: 0.9 };
}

module.exports = { parseTextInput, parseImageInput };
