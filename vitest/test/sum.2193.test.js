
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 6 to equal 37', () => {
  expect(sum(31, 6)).toBe(37);
});
