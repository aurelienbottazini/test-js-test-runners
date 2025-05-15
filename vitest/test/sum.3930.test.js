
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 31 to equal 46', () => {
  expect(sum(15, 31)).toBe(46);
});
