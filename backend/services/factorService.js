function extractFactors(answers) {
  const factors = [];
  if (answers.smoker) factors.push("smoking");
  if (answers.exercise === "rarely") factors.push("low exercise");
  if (answers.diet.includes("sugar") || answers.diet.includes("fast")) factors.push("poor diet");

  return { factors, confidence: 0.9 };
}

module.exports = { extractFactors };
