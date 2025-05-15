
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 55 to equal 101', () => {
  expect(sum(46, 55)).toBe(101);
});
