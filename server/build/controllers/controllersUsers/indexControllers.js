"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexUserController {
    index(req, res) {
        res.send('Hello User');
    }
}
exports.indexUserController = new IndexUserController();
