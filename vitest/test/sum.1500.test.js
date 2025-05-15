
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 28 to equal 105', () => {
  expect(sum(77, 28)).toBe(105);
});
