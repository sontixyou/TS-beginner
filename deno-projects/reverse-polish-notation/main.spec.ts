import { isNaturalNumber } from './main.ts';
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


  // const result5 = isNaturalNumber("hoge");
  // assertEquals(result5, false);
});

