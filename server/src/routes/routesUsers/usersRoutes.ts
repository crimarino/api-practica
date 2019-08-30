import { Router } from 'express';

import usersController from '../../controllers/controllersUsers/usersControllers'

class UsersRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:email_user', usersController.getOne);
        this.router.post('/', usersController.create);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;