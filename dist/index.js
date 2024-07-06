"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lexer_1 = require("./lexer");
const parser_1 = require("./parser");
const filePath = process.argv[2];
console.log(filePath);
if (!filePath) {
    console.error('Usage: node ./dist/index.js <file-path>');
    process.exit(1);
}
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
    }
    const tokens = (0, lexer_1.lexer)(data);
    const isValid = (0, parser_1.Parser)(tokens);
    console.log(isValid);
    if (isValid) {
        console.log('Valid YAML');
        process.exit(0);
    }
    else {
        console.log('Invalid YAML');
        process.exit(1);
    }
});
// let string1 = "Bino"
// let string2 = "Another string variant"
// let string3 = "name: coding challenges"
// let string4 = `name: coding challenges
//  food: salad`
// console.log(lexer(string1))
// console.log(lexer(string2))
// console.log(lexer(string3))
// console.log(lexer(string4))
