function classifyRisk(factors) {
  let score = 0;
  if (factors.includes("smoking")) score += 30;
  if (factors.includes("poor diet")) score += 25;
  if (factors.includes("low exercise")) score += 20;

  let risk_level = "low";
  if (score > 60) risk_level = "high";
  else if (score > 30) risk_level = "medium";

  return { risk_level, score, rationale: factors };
}

module.exports = { classifyRisk };
