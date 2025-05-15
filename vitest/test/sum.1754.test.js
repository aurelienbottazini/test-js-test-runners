
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 79 to equal 125', () => {
  expect(sum(46, 79)).toBe(125);
});
