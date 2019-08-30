import { Request, Response } from 'express'

import pool from '../../databases';

class UsersController{

    public async create (req: Request, res: Response){
         pool.query('INSERT INTO users set ?', [req.body]);
         res.json({message: 'Saved user'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { email_user } = req.params;
        const users = await pool.query('SELECT email_user, password_user FROM users WHERE email_user = ?', [email_user]);
        if(users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text: "The user doesn´t exists"});
    }
}

const usersController = new UsersController();
export default usersController;