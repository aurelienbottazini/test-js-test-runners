
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 9 to equal 55', () => {
  expect(sum(46, 9)).toBe(55);
});
