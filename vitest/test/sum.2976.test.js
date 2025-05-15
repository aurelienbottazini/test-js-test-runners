
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 99 to equal 108', () => {
  expect(sum(9, 99)).toBe(108);
});
