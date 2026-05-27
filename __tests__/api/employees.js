import express from "express";
import { getRandomEmployee, getEmployeeById, addEmployee } from "#db/employees";

const router = express.Router();

export default router;

//send all employees
router.get("/", (req, res) => {
  res.send(employees);
});

//pick a random employee from the employees array
router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

// get the id from the url
// convert id to a number and find the employee
// if no employee found send a 404 error
// send the employee back
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployeeById(+id);
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.send(employee);
});
