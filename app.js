// import express and employees router
import express from "express";
import employeesRouter from "#api/employees";

// create the express app
// export the app
const app = express();
export default app;

// parse incoming JSON request bodies
app.use(express.json());

// send greeting message back to the client
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// use the employees router for all /employees routes
app.use("/employees", employeesRouter);

// catch all uncaught errors and send a 500 status
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
