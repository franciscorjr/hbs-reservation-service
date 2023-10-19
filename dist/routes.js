"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
/* */
routes.get('/', (_req, res) => {
    return res.send({ message: 'Hello World from Reservation Service!!' });
});
routes.post('/', (_req, res) => {
    return res.send({ message: 'Hello World!' });
});
routes.put('/', (_req, res) => {
    return res.send({ message: 'Hello World!' });
});
routes.delete('/', (_req, res) => {
    return res.send({ message: 'Hello World!' });
});
routes.patch('/', (_req, res) => {
    return res.send({ message: 'Hello World!' });
});
exports.default = routes;
