"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databases_1 = __importDefault(require("../../databases"));
class UsersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            databases_1.default.query('INSERT INTO users set ?', [req.body]);
            res.json({ message: 'Saved user' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email_user } = req.params;
            const users = yield databases_1.default.query('SELECT email_user, password_user FROM users WHERE email_user = ?', [email_user]);
            if (users.length > 0) {
                return res.json(users[0]);
            }
            res.status(404).json({ text: "The user doesn´t exists" });
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
