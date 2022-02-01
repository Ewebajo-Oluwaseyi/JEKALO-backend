"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
//routes
userRouter.post('/user', user_controller_1.postUser);
userRouter.get('/users', user_controller_1.getUser);
userRouter.delete('/:username', user_controller_1.deleteuser);
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map