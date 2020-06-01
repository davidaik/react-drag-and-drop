const express = require("express");
const app = express();

const editorComponents = require("./api/editorComponents");

app.use("/editorComponents", editorComponents);

app.listen(5000);
console.log("Server running on port 5000...");
