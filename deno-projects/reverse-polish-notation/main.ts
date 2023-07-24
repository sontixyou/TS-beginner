const input : string[] = Deno.args;
const stack : number[] = [];

function isNaturalNumber(num: number): boolean {
  return num >= 0 && Number.isInteger(num);
}
export { isNaturalNumber };

function reversePolishNotation(input: string[]): number | undefined {
  for (const element of input) {
    console.log(element)
    switch (element) {
      case "+" : {
        const number1 : number | undefined = stack.pop();
        const number2 : number | undefined = stack.pop();
        if (typeof number1 === "number" && typeof number2 === "number") {
          stack.push(number1 + number2);
          console.log(stack)
        } else {
          console.log("Invalid input");
          throw new Error("Invalid input");
        }
        break;
      }
      default: {
        const number : number = parseInt(element)

        if (isNaturalNumber(number)) {
          stack.push(number);
        } else {
          console.log("Invalid input");
          throw new Error("Invalid input");
        }
        break;
      }
    }
  }

  return stack.pop();
}
console.log(reversePolishNotation(input));

