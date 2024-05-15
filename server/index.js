const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const MarsRoverService = require('./services/marsroverservice');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);

app.get('/api', (req, res) => {
    res.json({ message: "Hello world!" });
})

app.post("/api/instructions", (req, res) => {
    const rawInstructions = req.body.instructions;

    const finalRoverPositions = MarsRoverService.handleInstructions(rawInstructions);
    
    res.json({ result: finalRoverPositions });
});
