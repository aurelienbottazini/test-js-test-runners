
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 78 to equal 124', () => {
  expect(sum(46, 78)).toBe(124);
});
