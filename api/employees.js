//import express and employee from the database layer
import express from "express";
import {
  getEmployees,
  getRandomEmployee,
  getEmployeeById,
  addEmployee,
} from "#db/employees";

const router = express.Router();
export default router;

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

//pick a random employee
router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

//get the id from the url
//find the employee by id
//if no employee found send a 404 error
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployeeById(+id);
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.send(employee);
});

//get the name from the request body
//if no name provided send a 400 error
//add the employee and send them back with 201
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required");
  }
  const employee = addEmployee(name);
  res.status(201).send(employee);
});
