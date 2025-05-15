
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 17 to equal 63', () => {
  expect(sum(46, 17)).toBe(63);
});
