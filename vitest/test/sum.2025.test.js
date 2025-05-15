
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 7 to equal 53', () => {
  expect(sum(46, 7)).toBe(53);
});
