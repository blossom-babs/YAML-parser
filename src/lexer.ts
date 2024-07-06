
export interface Token {
type: 'KEY' | 'VALUE' | 'COLON' | 'INVALID'
value: string
}

export const lexer = (input:string): Token[] => {
const tokens: Token[] = []
const lines = input.split('\n')
for (const line of lines){
  const trimmedLine = line.trim()
  if(!trimmedLine) continue;

  const colonIndex = trimmedLine.indexOf(':')

  if(colonIndex === -1){
    tokens.push({type: 'INVALID', value:line})
    continue;
  }

  const key = trimmedLine.substring(0, colonIndex).trim()
  const value = trimmedLine.substring(colonIndex + 1).trim()

  if(!key || !value){
    tokens.push({type: 'INVALID', value: line})
  } else{
    tokens.push({ type: 'KEY', value: key })
    tokens.push({ type: 'COLON', value: ':' })
    tokens.push({ type: 'VALUE', value: value })
  }
}

return tokens
}
