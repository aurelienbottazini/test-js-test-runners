
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 14 to equal 46', () => {
  expect(sum(32, 14)).toBe(46);
});
