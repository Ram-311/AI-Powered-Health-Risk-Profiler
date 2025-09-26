function generateRecommendations(factors, risk_level) {
  const recommendations = [];
  if (factors.includes("smoking")) recommendations.push("Quit smoking");
  if (factors.includes("poor diet")) recommendations.push("Reduce sugar");
  if (factors.includes("low exercise")) recommendations.push("Walk 30 mins daily");

  return { risk_level, factors, recommendations, status: "ok" };
}

module.exports = { generateRecommendations };
