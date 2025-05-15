
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 6 to equal 46', () => {
  expect(sum(40, 6)).toBe(46);
});
