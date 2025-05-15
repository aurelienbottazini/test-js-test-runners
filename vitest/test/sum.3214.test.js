
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 37 to equal 95', () => {
  expect(sum(58, 37)).toBe(95);
});
