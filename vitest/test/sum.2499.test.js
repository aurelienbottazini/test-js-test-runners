
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 76 to equal 110', () => {
  expect(sum(34, 76)).toBe(110);
});
