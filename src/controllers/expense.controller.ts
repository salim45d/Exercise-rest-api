import { Request, Response, NextFunction, response } from "express";
import { MOCK_API_URL } from "../config";
import axios from "axios";

async function GetExpenseList(req: Request, res: Response, next: NextFunction) {
  try {
    const { category } = req.query;

    const { data } = await axios.get(
      category
        ? `${MOCK_API_URL}/expense?category=${category}`
        : `${MOCK_API_URL}/expense`
    );
    res.status(200).send({ message: "Get Expense Success", data });
  } catch (error) {
    next(error);
  }
}

async function GetExpenseDetail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${MOCK_API_URL}/expense/${id}`);
    res.status(200).send({
      message: "Get Detail Expense Success",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function AddExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, nominal, type, category, date } = req.body;

    const { data } = await axios.post(`${MOCK_API_URL}/expense`, {
      title,
      nominal,
      type,
      category,
      date,
    });
    res.status(200).send({
      message: "Add Expense Success",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function EditExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, nominal, type, category, date } = req.body;
    const { id } = req.params;
    const { data } = await axios.put(`${MOCK_API_URL}/expense/${id}`, {
      title,
      nominal,
      type,
      category,
      date,
    });
    res.status(200).send({
      message: "Edit Expense Success",
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function DeleteExpense(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { data } = await axios.delete(`${MOCK_API_URL}/expense/${id}`);
    res.status(200).send({
      message: "Delete Expense Success",
      data,
    });
  } catch (error) {
    next(error);
  }
}

export {
  GetExpenseList,
  GetExpenseDetail,
  AddExpense,
  EditExpense,
  DeleteExpense,
};
