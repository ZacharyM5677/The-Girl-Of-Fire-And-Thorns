const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.static(__dirname));
const filePath = path.join(__dirname, 'index.html');
const data = fs.readFileSync(filePath, 'utf-8');

app.get("/", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});