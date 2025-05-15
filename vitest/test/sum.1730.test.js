
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 5 to equal 46', () => {
  expect(sum(41, 5)).toBe(46);
});
