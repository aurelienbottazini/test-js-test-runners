
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 27 to equal 46', () => {
  expect(sum(19, 27)).toBe(46);
});
