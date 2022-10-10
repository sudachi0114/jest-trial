import axios from "axios";
import express from "express";

const app = express();
app.get("/", (request, response) => {
    response.json({"status": "ok"});
});

export async function requestAPI(): Promise<any> {
    const response = await axios.get("https://internal-api/get_data"); // こんな内部APIは立てていないので、アクセスできない
    return response.data;
}


app.listen(8081);

export default app;
