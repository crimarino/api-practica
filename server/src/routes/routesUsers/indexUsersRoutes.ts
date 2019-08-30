import { Router } from 'express';

import { indexUserController } from '../../controllers/controllersUsers/indexUsersControllers';

class IndexUsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexUserController.index);
    }
}

const indexUsersRoutes = new IndexUsersRoutes();
export default indexUsersRoutes.router;