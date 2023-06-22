import { Router } from "express";
import { getEmployees,createEmployees,updateEmployees,deleteEmployees,getEmployee } from "../controller/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get('/employee/:id', getEmployee)

router.post("/employee", createEmployees);

router.patch("/employee/:id", updateEmployees);

router.delete("/employee/:id", deleteEmployees);

export default router;
