
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 10 to equal 56', () => {
  expect(sum(46, 10)).toBe(56);
});
