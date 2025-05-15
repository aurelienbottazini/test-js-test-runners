
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 98 to equal 101', () => {
  expect(sum(3, 98)).toBe(101);
});
