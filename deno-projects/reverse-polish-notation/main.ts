const input: string[] = Deno.args;
const stack: number[] = [];

function isNaturalNumber(num: number): boolean {
  return num >= 0 && Number.isInteger(num);
}

function reversePolishNotation(input: string[]): number | undefined {
  try {
    for (const element of input) {
      switch (element) {
        case "+": {
          const number1: number | undefined = stack.pop();
          const number2: number | undefined = stack.pop();
          if (typeof number1 === "number" && typeof number2 === "number") {
            stack.push(number1 + number2);
          } else {
            throw new Error("Invalid input");
          }
          break;
        }
        case "-": {
          const number1: number | undefined = stack.pop();
          const number2: number | undefined = stack.pop();
          if (typeof number1 === "number" && typeof number2 === "number") {
            stack.push(number1 - number2);
          } else {
            throw new Error("Invalid input");
          }
          break;
        }
        case "x": {
          const number1: number | undefined = stack.pop();
          const number2: number | undefined = stack.pop();
          if (typeof number1 === "number" && typeof number2 === "number") {
            stack.push(number1 * number2);
          } else {
            throw new Error("Invalid input");
          }
          break;
        }
        case "/": {
          const number1: number | undefined = stack.pop();
          const number2: number | undefined = stack.pop();
          if (typeof number1 === "number" && typeof number2 === "number") {
            stack.push(number2 / number1);
          } else {
            throw new Error("Invalid input");
          }
          break;
        }
        default: {
          const number: number = parseInt(element);

          if (isNaturalNumber(number)) {
            stack.push(number);
          } else {
            throw new Error("Invalid input");
          }
          break;
        }
      }
    }

    const result: number | undefined = stack.pop();
    if (result === undefined || stack.length > 0) {
      throw new Error("Invalid input");
    }

    return result;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
}

const result = reversePolishNotation(input);
if (result !== undefined) {
  console.log("Result:", result);
}

export { isNaturalNumber, reversePolishNotation };
