
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 35 to equal 46', () => {
  expect(sum(11, 35)).toBe(46);
});
