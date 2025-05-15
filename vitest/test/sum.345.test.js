
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 32 to equal 46', () => {
  expect(sum(14, 32)).toBe(46);
});
