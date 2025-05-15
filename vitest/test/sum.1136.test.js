
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 37 to equal 123', () => {
  expect(sum(86, 37)).toBe(123);
});
