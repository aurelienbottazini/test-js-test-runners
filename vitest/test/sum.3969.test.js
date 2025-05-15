
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 88 to equal 98', () => {
  expect(sum(10, 88)).toBe(98);
});
