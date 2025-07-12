import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Export the app for testing
export default app;

// Start the server
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
