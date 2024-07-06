import * as fs from 'fs'
import { lexer } from "./lexer";
import {Parser} from './parser'

const filePath = process.argv[2]

console.log(filePath)

if(!filePath){
  console.error('Usage: node ./dist/index.js <file-path>')
  process.exit(1)
}

fs.readFile(filePath, 'utf8', (err,data) => {
  if(err){
    console.error(`Error reading file: ${err.message}`)
    process.exit(1)
  }

  const tokens = lexer(data)
  const isValid = Parser(tokens)
console.log(isValid)
  if(isValid){
    console.log('Valid YAML')
    process.exit(0)
  } else{
    console.log('Invalid YAML')
    process.exit(1)
  }
})
// let string1 = "Bino"
// let string2 = "Another string variant"

// let string3 = "name: coding challenges"
// let string4 = `name: coding challenges
//  food: salad`

// console.log(lexer(string1))
// console.log(lexer(string2))
// console.log(lexer(string3))
// console.log(lexer(string4))