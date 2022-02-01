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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.getUser = exports.postUser = void 0;
const user_service_1 = require("../services/user.service");
//post user controller
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    try {
        let result = yield (0, user_service_1.createUser)(data);
        return res.status(201).json({ success: true, data: result });
    }
    catch (error) {
        return res.status(412).json({ success: false, message: error.message });
    }
});
exports.postUser = postUser;
//get all users controller
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_service_1.getAllUser)();
        return res.status(201).json({ success: true, data: result });
    }
    catch (error) {
        return res.status(412).json({ success: false, message: error.message });
    }
});
exports.getUser = getUser;
//delete a controller
const deleteuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.params.username;
        yield (0, user_service_1.removeUser)(username);
        res.status(201).json({ success: true, message: "You deleted the user successfully" });
    }
    catch (error) {
        return res.status(412).json({ success: false, message: error.message });
    }
});
exports.deleteuser = deleteuser;
//# sourceMappingURL=user.controller.js.map