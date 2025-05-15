
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 11 to equal 46', () => {
  expect(sum(35, 11)).toBe(46);
});
