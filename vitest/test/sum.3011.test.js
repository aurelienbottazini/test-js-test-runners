
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 11 to equal 105', () => {
  expect(sum(94, 11)).toBe(105);
});
