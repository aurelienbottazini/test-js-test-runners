
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 40 to equal 86', () => {
  expect(sum(46, 40)).toBe(86);
});
