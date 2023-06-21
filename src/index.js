import express  from "express";
import employeeRoutes from './routes/employees.routes.js'
import indexRouter from './routes/index.routes.js'
//como es un export default le nombre como quize

const app=express()
app.use(express.json())
app.use('/api',employeeRoutes,indexRouter)
//le indico la carpeta a usar y la ruta inicial

app.listen(3000,()=>{
    console.log(`server running on http://localhost:${3000}`);
})

app.get('/',(req,res)=>{
    res.send('welcome')
})