import { isNaturalNumber, reversePolishNotation } from './main.ts';
import { assertEquals } from "https://deno.land/std@0.195.0/testing/asserts.ts";

Deno.test("isNaturalNumber", () => {
  const result = isNaturalNumber(1);
  assertEquals(result, true);

  const result2 = isNaturalNumber(-1);
  assertEquals(result2, false);

  const result3 = isNaturalNumber(0);
  assertEquals(result3, true);

  const result4 = isNaturalNumber(1.1);
  assertEquals(result4, false);
});

Deno.test("Addition", () => {
  const result = reversePolishNotation(["1", "1", "+"]);
  assertEquals(result, 2);

  const result2 = reversePolishNotation(["1", "+", "2"]);
  assertEquals(result2, undefined);

  const result3 = reversePolishNotation(["+", "1", "1"]);
  assertEquals(result3, undefined);
});

Deno.test("Subtraction", () => {
  const result : number | undefined = reversePolishNotation(["1", "1", "-"]);
  assertEquals(result, 0);

  const result2 : number | undefined = reversePolishNotation(["1", "-", "2"]);
  assertEquals(result2, undefined);

  const result3 : number | undefined = reversePolishNotation(["-", "1", "1"]);
  assertEquals(result3, undefined);
});

Deno.test("Multiplication", () => {
  const result : number | undefined = reversePolishNotation(["1", "5", "*"]);
  assertEquals(result, 5);

  const result2 : number | undefined = reversePolishNotation(["1", "*", "2"]);
  assertEquals(result2, undefined);

  const result3 : number | undefined = reversePolishNotation(["*", "1", "1"]);
  assertEquals(result3, undefined);
});

Deno.test("Division", () => {
  const result : number | undefined = reversePolishNotation(["1", "5", "/"]);
  assertEquals(result, 0.2);

  const result2 : number | undefined = reversePolishNotation(["10", "2", "/"]);
  assertEquals(result2, 5);

  const result3 : number | undefined = reversePolishNotation(["1", "/", "2"]);
  assertEquals(result3, undefined);

  const result4 : number | undefined = reversePolishNotation(["/", "1", "1"]);
  assertEquals(result4, undefined);
});
