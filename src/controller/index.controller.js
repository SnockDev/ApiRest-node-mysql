import {pool} from '../connection.js'

export const pong=async (req,res)=>{
    const [result] =await pool.query('SELECT "pong" AS Result');
    res.json(result[0]);
}