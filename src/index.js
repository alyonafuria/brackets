module.exports = function check(str, bracketsConfig) {

    const BRACKETS_PAIR = {};
    for (i = 0; i < bracketsConfig.length; i++) {
        BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    
    const OPEN_BRACKETS = Object.values(BRACKETS_PAIR);

    const SAME_SYMBOLS = [];
    for (i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
          SAME_SYMBOLS.push(bracketsConfig[i][0]);
        }
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if (OPEN_BRACKETS.includes(currentSymbol) && !SAME_SYMBOLS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else if (SAME_SYMBOLS.includes(currentSymbol) && !stack.includes(currentSymbol)) {
            stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
