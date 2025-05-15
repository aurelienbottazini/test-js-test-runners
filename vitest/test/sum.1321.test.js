
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 5 to equal 51', () => {
  expect(sum(46, 5)).toBe(51);
});
