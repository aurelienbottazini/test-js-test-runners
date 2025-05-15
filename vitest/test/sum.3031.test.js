
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 55 to equal 99', () => {
  expect(sum(44, 55)).toBe(99);
});
