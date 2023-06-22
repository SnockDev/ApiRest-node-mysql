import { pool } from "../connection.js";

export const getEmployees = async (req, res) => {
  //   res.send(`obteniendo empleados`);
  const [employees] = await pool.query("select * from employee");
  res.send(employees);
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  const [user] = await pool.query(`select * from employee where id=?`, id);
  if (user.length < 1) {
    return res.sendStatus(404).send("user not found");
  }
  res.send(user);
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  console.log(name, salary);
  const [rows] = await pool.query(
    "INSERT INTO employee (name,salary) VALUES (?, ?)",
    [name, salary]
  );
  console.log(`done`);
  res.send({
    name: name,
    salary: salary,
    id: rows.insertId,
  });
};
export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const [result] = await pool.query(
    `update employee set name= IFNULL(?,name) ,salary= IFNULL(?,salary) where id=${id}`,
    [body.name, body.salary]
  );
  if (result.affectedRows<1){
    res.sendStatus(404).json({"message":"user not found"})
  }
  const [user] = await pool.query(`select * from employee where id=?`, id);
  res.send({
    name: name,
    salary: salary,
    id: rows.insertId,
  });
};

export const deleteEmployees = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query(`delete from employee where id= ?`, [id]);
  if (result.affectedRows < 1) {
    return res.status(404).json({ message: "id not found" });
  }
  res.sendStatus(204);
};
