"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = Parser;
function Parser(tokens) {
    let State;
    (function (State) {
        State[State["EXPECT_KEY"] = 0] = "EXPECT_KEY";
        State[State["EXPECT_COLON"] = 1] = "EXPECT_COLON";
        State[State["EXPECT_VALUE"] = 2] = "EXPECT_VALUE";
    })(State || (State = {}));
    let state = State.EXPECT_KEY;
    for (const token of tokens) {
        console.log(token);
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
