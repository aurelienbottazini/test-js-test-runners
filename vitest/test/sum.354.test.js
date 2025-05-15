
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 1 to equal 47', () => {
  expect(sum(46, 1)).toBe(47);
});
