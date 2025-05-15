
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 37 to equal 46', () => {
  expect(sum(9, 37)).toBe(46);
});
