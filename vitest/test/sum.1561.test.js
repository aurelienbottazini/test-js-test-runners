
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 41 to equal 46', () => {
  expect(sum(5, 41)).toBe(46);
});
