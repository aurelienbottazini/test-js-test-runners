
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 29 to equal 58', () => {
  expect(sum(29, 29)).toBe(58);
});
