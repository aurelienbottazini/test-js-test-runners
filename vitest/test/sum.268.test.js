
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 27 to equal 73', () => {
  expect(sum(46, 27)).toBe(73);
});
