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
const mongoose = require('mongoose');
//const config = require('config');
const db = "mongodb+srv://adeoluwa:adeoluwa@user.he5sy.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    }
    catch (err) {
        console.log(err.message);
        process.exit(1);
    }
});
module.exports = connectDB;
//# sourceMappingURL=db.js.map