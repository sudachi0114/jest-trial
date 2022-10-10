import express from "express";

const app = express();
app.get("/", (request, response) => {
    response.json({"status": "ok"});
});

app.listen(8081);

export default app;