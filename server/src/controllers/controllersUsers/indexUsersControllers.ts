import { Request, Response } from 'express'

class IndexUserController{

    public index (req: Request, res: Response){
        res.send('Index Users')
    }

}

export const indexUserController = new IndexUserController();