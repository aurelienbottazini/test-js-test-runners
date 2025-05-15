
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 86 to equal 132', () => {
  expect(sum(46, 86)).toBe(132);
});
