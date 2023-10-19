"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
// Rota para criar um usuário
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const user = yield user_1.default.create({ name, email });
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
}));
// Rota para listar todos os usuários
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    return res.json(users);
}));
// Rota para atualizar um usuário
router.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const userId = req.params.id;
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        user.name = name;
        user.email = email;
        yield user.save();
        return res.json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}));
// Rota para excluir um usuário
router.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        yield user.destroy();
        return res.status(204).end();
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
}));
exports.default = router;
