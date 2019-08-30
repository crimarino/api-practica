import { Router } from 'express';

import { indexGamesController } from '../../controllers/controllersGames/indexGamesController';

class IndexGamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexGamesController.index);
    }
}

const indexGamesRoutes = new IndexGamesRoutes();
export default indexGamesRoutes.router;