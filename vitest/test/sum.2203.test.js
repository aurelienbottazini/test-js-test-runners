
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 45 to equal 46', () => {
  expect(sum(1, 45)).toBe(46);
});
