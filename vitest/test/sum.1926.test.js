
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 16 to equal 62', () => {
  expect(sum(46, 16)).toBe(62);
});
