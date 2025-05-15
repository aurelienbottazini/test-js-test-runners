
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 20 to equal 46', () => {
  expect(sum(26, 20)).toBe(46);
});
