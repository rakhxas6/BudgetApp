import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  // delete the user

  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({ key: "expenses", id: expense.id });
    });
    toast.success("Budget Deleted Successfully!");
  } catch (error) {
    throw new Error("There was a problem deleting your Budget.");
  }

  //return redirect
  return redirect("/");
}
