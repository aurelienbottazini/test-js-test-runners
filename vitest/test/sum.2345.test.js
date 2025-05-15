
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 12 to equal 46', () => {
  expect(sum(34, 12)).toBe(46);
});
