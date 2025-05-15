
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 47 to equal 93', () => {
  expect(sum(46, 47)).toBe(93);
});
