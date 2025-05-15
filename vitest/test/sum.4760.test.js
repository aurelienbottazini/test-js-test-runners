
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 62 to equal 108', () => {
  expect(sum(46, 62)).toBe(108);
});
