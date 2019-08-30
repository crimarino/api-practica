"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexGamesController {
    index(req, res) {
        res.send('Index Games');
    }
}
exports.indexGamesController = new IndexGamesController();
