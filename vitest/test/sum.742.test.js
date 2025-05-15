
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 75 to equal 121', () => {
  expect(sum(46, 75)).toBe(121);
});
