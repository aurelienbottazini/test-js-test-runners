
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 18 to equal 46', () => {
  expect(sum(28, 18)).toBe(46);
});
