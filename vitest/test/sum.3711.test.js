
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 0 to equal 46', () => {
  expect(sum(46, 0)).toBe(46);
});
