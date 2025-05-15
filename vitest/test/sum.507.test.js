
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 70 to equal 101', () => {
  expect(sum(31, 70)).toBe(101);
});
