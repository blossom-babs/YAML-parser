import { Token } from './lexer';

export function Parser(tokens: Token[]): boolean {
  enum State {
    EXPECT_KEY,
    EXPECT_COLON,
    EXPECT_VALUE
  }

  let state = State.EXPECT_KEY;

  for (const token of tokens) {
    console.log(token)
    if (token.type === 'INVALID') {
      return false;
    }

    switch (state) {
      case State.EXPECT_KEY:
        if (token.type !== 'KEY') {
          return false;
        }
        state = State.EXPECT_COLON;
        break;
      
      case State.EXPECT_COLON:
        if (token.type !== 'COLON') {
          return false;
        }
        state = State.EXPECT_VALUE;
        break;
      
      case State.EXPECT_VALUE:
        if (token.type !== 'VALUE') {
          return false;
        }
        state = State.EXPECT_KEY;
        break;

      default:
        return false;
    }
  }

  return state === State.EXPECT_KEY;
}
