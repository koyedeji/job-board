import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// App configuration
const app = express();
app.set("port", process.env.PORT || 7777);
app.use(cors());
app.use(bodyParser.json());

export default app;
