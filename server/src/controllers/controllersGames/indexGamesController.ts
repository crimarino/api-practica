import { Request, Response } from 'express'

class IndexGamesController{

    public index (req: Request, res: Response){
        res.send('Index Games')
    }

}

export const indexGamesController = new IndexGamesController();