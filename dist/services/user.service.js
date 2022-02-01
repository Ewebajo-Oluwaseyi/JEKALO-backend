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
exports.removeUser = exports.getAllUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../database/model/User"));
//creat a user in db
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, username, date_of_birth } = data;
    const name_prefix = `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`;
    try {
        const newUser = new User_1.default({
            first_name,
            last_name,
            username,
            date_of_birth,
            name_prefix
        });
        const user = yield newUser.save();
        return user;
    }
    catch (error) {
        throw new Error('Error creating user');
    }
});
exports.createUser = createUser;
//get all users in db
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find({});
        return users;
    }
    catch (error) {
        throw new Error('Error getting users');
    }
});
exports.getAllUser = getAllUser;
//remove a user in db
const removeUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.default.findOneAndDelete({ username: username });
    }
    catch (error) {
        throw new Error('Error deleting user');
    }
});
exports.removeUser = removeUser;
//# sourceMappingURL=user.service.js.map