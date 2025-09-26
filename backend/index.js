// const express = require("express");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// const { parseImageInput, parseTextInput } = require("./services/ocrService");
// const { extractFactors } = require("./services/factorService");
// const { classifyRisk } = require("./services/riskService");
// const { generateRecommendations } = require("./services/recommendationService");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors()); 


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // APIs
// app.post("/analyze-text", async (req, res) => {
//   try {
  
//     const parsed = await parseTextInput(req.body);
//     if (parsed.status === "incomplete_profile") return res.json(parsed);

//     const factors = extractFactors(parsed.answers);

  
//     const risk = classifyRisk(factors.factors);

   
//     const recommendations = generateRecommendations(factors.factors, risk.risk_level);

   
//     const output = {
//       "Step 1 - OCR/Text Parsing": {
//         answers: parsed.answers,
//         missing_fields: parsed.missing_fields,
//         confidence: parsed.confidence
//       },
//       "Step 2 - Factor Extraction": {
//         factors: factors.factors,
//         confidence: factors.confidence
//       },
//       "Step 3 - Risk Classification": {
//         risk_level: risk.risk_level,
//         score: risk.score,
//         rationale: risk.rationale
//       },
//       "Step 4 - Recommendations": {
//         risk_level: risk.risk_level,
//         factors: factors.factors,
//         recommendations: recommendations.recommendations,
//         status: recommendations.status
//       }
//     };

//     res.json(output);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.post("/upload", upload.single("form"), async (req, res) => {
//   try {
//     const filePath = req.file.path;

   
//     const parsed = await parseImageInput(filePath);
//     if (parsed.status === "incomplete_profile") return res.json(parsed);

   
//     const factors = extractFactors(parsed.answers);

    
//     const risk = classifyRisk(factors.factors);

    
//     const recommendations = generateRecommendations(factors.factors, risk.risk_level);

   
//     const output = {
//       "Step 1 - OCR/Text Parsing": {
//         answers: parsed.answers,
//         missing_fields: parsed.missing_fields,
//         confidence: parsed.confidence
//       },
//       "Step 2 - Factor Extraction": {
//         factors: factors.factors,
//         confidence: factors.confidence
//       },
//       "Step 3 - Risk Classification": {
//         risk_level: risk.risk_level,
//         score: risk.score,
//         rationale: risk.rationale
//       },
//       "Step 4 - Recommendations": {
//         risk_level: risk.risk_level,
//         factors: factors.factors,
//         recommendations: recommendations.recommendations,
//         status: recommendations.status
//       }
//     };

//     res.json(output);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.listen(5000, () => console.log("Backend running at http://localhost:5000"));



// const express = require("express");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");

// const { parseImageInput, parseTextInput } = require("./services/ocrService");
// const { extractFactors } = require("./services/factorService");
// const { classifyRisk } = require("./services/riskService");
// const { generateRecommendations } = require("./services/recommendationService");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Multer config for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // --- API Routes ---

// // Analyze text input
// app.post("/analyze-text", async (req, res) => {
//   try {
//     const parsed = await parseTextInput(req.body);
//     if (parsed.status === "incomplete_profile") return res.json(parsed);

//     const factors = extractFactors(parsed.answers);
//     const risk = classifyRisk(factors.factors);
//     const recommendations = generateRecommendations(factors.factors, risk.risk_level);

//     const output = {
//       "Step 1 - OCR/Text Parsing": {
//         answers: parsed.answers,
//         missing_fields: parsed.missing_fields,
//         confidence: parsed.confidence
//       },
//       "Step 2 - Factor Extraction": {
//         factors: factors.factors,
//         confidence: factors.confidence
//       },
//       "Step 3 - Risk Classification": {
//         risk_level: risk.risk_level,
//         score: risk.score,
//         rationale: risk.rationale
//       },
//       "Step 4 - Recommendations": {
//         risk_level: risk.risk_level,
//         factors: factors.factors,
//         recommendations: recommendations.recommendations,
//         status: recommendations.status
//       }
//     };

//     res.json(output);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Upload and analyze image form
// app.post("/upload", upload.single("form"), async (req, res) => {
//   try {
//     const filePath = req.file.path;

//     const parsed = await parseImageInput(filePath);
//     if (parsed.status === "incomplete_profile") return res.json(parsed);

//     const factors = extractFactors(parsed.answers);
//     const risk = classifyRisk(factors.factors);
//     const recommendations = generateRecommendations(factors.factors, risk.risk_level);

//     const output = {
//       "Step 1 - OCR/Text Parsing": {
//         answers: parsed.answers,
//         missing_fields: parsed.missing_fields,
//         confidence: parsed.confidence
//       },
//       "Step 2 - Factor Extraction": {
//         factors: factors.factors,
//         confidence: factors.confidence
//       },
//       "Step 3 - Risk Classification": {
//         risk_level: risk.risk_level,
//         score: risk.score,
//         rationale: risk.rationale
//       },
//       "Step 4 - Recommendations": {
//         risk_level: risk.risk_level,
//         factors: factors.factors,
//         recommendations: recommendations.recommendations,
//         status: recommendations.status
//       }
//     };

//     res.json(output);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // --- Serve React Frontend ---
// // Serve React Frontend
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// // For any route NOT starting with /api, serve React index.html
// app.get(/^\/(?!api).*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });



// // --- Start Server ---
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const { parseImageInput, parseTextInput } = require("./services/ocrService");
const { extractFactors } = require("./services/factorService");
const { classifyRisk } = require("./services/riskService");
const { generateRecommendations } = require("./services/recommendationService");

const app = express();

// Parse JSON requests
app.use(bodyParser.json());

// CORS (for local testing; in production, frontend served from same domain)
app.use(cors());

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use /tmp/ for Render deployment
    const uploadPath = process.env.RENDER ? "/tmp/" : "uploads/";
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// --- API Routes ---

// Analyze text input
app.post("/analyze-text", async (req, res) => {
  try {
    const parsed = await parseTextInput(req.body);
    if (parsed.status === "incomplete_profile") return res.json(parsed);

    const factors = extractFactors(parsed.answers);
    const risk = classifyRisk(factors.factors);
    const recommendations = generateRecommendations(factors.factors, risk.risk_level);

    const output = {
      "Step 1 - OCR/Text Parsing": {
        answers: parsed.answers,
        missing_fields: parsed.missing_fields,
        confidence: parsed.confidence
      },
      "Step 2 - Factor Extraction": {
        factors: factors.factors,
        confidence: factors.confidence
      },
      "Step 3 - Risk Classification": {
        risk_level: risk.risk_level,
        score: risk.score,
        rationale: risk.rationale
      },
      "Step 4 - Recommendations": {
        risk_level: risk.risk_level,
        factors: factors.factors,
        recommendations: recommendations.recommendations,
        status: recommendations.status
      }
    };

    res.json(output);
  } catch (err) {
    console.error("Text analysis error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Upload and analyze image form
app.post("/upload", upload.single("form"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded or field name should be 'form'" });
    }

    console.log("Uploaded file:", req.file.path);

    const parsed = await parseImageInput(req.file.path);
    if (parsed.status === "incomplete_profile") return res.json(parsed);

    const factors = extractFactors(parsed.answers);
    const risk = classifyRisk(factors.factors);
    const recommendations = generateRecommendations(factors.factors, risk.risk_level);

    const output = {
      "Step 1 - OCR/Text Parsing": {
        answers: parsed.answers,
        missing_fields: parsed.missing_fields,
        confidence: parsed.confidence
      },
      "Step 2 - Factor Extraction": {
        factors: factors.factors,
        confidence: factors.confidence
      },
      "Step 3 - Risk Classification": {
        risk_level: risk.risk_level,
        score: risk.score,
        rationale: risk.rationale
      },
      "Step 4 - Recommendations": {
        risk_level: risk.risk_level,
        factors: factors.factors,
        recommendations: recommendations.recommendations,
        status: recommendations.status
      }
    };

    res.json(output);
  } catch (err) {
    console.error("Upload analysis error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- Serve React Frontend ---
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Serve React index.html for all non-API routes
app.get(/^\/(?!api|upload).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
