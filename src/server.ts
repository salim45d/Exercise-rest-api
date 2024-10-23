import express, { Application } from "express";
import { PORT as port } from "./config";
import router from "./routes/expense.route";
import errorMiddleware from "./middlewares/error.midleware";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/expense-management", router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
