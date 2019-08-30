"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexUsersControllers_1 = require("../../controllers/controllersUsers/indexUsersControllers");
class IndexUsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexUsersControllers_1.indexUserController.index);
    }
}
const indexUsersRoutes = new IndexUsersRoutes();
exports.default = indexUsersRoutes.router;
