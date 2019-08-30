import { Request, Response } from 'express'

import pool from '../../databases';

class UsersController{

    public async list (req: Request, res: Response){
        const games = await pool.query('SELECT * FROM users');
        res.json(games);
    }

    public async create (req: Request, res: Response){
         pool.query('INSERT INTO users set ?', [req.body]);
         res.json({message: 'Saved user'});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id_user = ?', [id]);
        if(users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text: "The user doesn´t exists"});
    }

    public async put (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE users set ? WHERE id_user = ?', [req.body, id]);
        res.json({message: 'The user was updated'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id_user = ?', [id]);
        res.json({message: 'The user was deleted'});
        }
}

const usersController = new UsersController();
export default usersController;