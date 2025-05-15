
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 55 to equal 86', () => {
  expect(sum(31, 55)).toBe(86);
});
