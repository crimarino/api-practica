"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexGamesController_1 = require("../../controllers/controllersGames/indexGamesController");
class IndexGamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexGamesController_1.indexGamesController.index);
    }
}
const indexGamesRoutes = new IndexGamesRoutes();
exports.default = indexGamesRoutes.router;
