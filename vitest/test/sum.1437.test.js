
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 48 to equal 137', () => {
  expect(sum(89, 48)).toBe(137);
});
