
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 55 to equal 65', () => {
  expect(sum(10, 55)).toBe(65);
});
