
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 36 to equal 82', () => {
  expect(sum(46, 36)).toBe(82);
});
