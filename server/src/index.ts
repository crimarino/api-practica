import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import gamesRoutes from './routes/routesGames/gamesRoutes';
import indexUsersRoutes from './routes/routesUsers/indexUsersRoutes';
import usersRoutes from './routes/routesUsers/usersRoutes';

class Server {
public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes() {
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/', indexUsersRoutes);
        this.app.use('/api/users', usersRoutes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();