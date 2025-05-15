
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 45 to equal 91', () => {
  expect(sum(46, 45)).toBe(91);
});
