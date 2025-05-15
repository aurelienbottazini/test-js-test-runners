
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 76 to equal 137', () => {
  expect(sum(61, 76)).toBe(137);
});
