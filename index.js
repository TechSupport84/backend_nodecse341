import fs from "fs";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerRouter from "./routes/swagger.js"

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerFilePath = path.resolve("swagger.json");
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, "utf-8"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/Contacts", userRouter);
app.use("/", swaggerRouter)

app.listen(PORT, async () => {
  console.log(`The server is running on port ${PORT}`);
  await connectDB();
});
