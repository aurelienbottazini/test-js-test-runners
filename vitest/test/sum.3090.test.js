
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 55 to equal 137', () => {
  expect(sum(82, 55)).toBe(137);
});
