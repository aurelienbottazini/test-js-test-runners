
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 16 to equal 46', () => {
  expect(sum(30, 16)).toBe(46);
});
