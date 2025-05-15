
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 77 to equal 105', () => {
  expect(sum(28, 77)).toBe(105);
});
