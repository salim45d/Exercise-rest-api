import { Router } from "express";
import {
  GetExpenseList,
  GetExpenseDetail,
  AddExpense,
  EditExpense,
  DeleteExpense,
} from "../controllers/expense.controller";

const router = Router();

router.get("/expenses", GetExpenseList);
router.get("/expenses/:id", GetExpenseDetail);
router.post("/expenses/", AddExpense);
router.put("/expenses/:id", EditExpense);
router.delete("/expenses/:id", DeleteExpense);

export default router;
