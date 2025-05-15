
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 35 to equal 81', () => {
  expect(sum(46, 35)).toBe(81);
});
