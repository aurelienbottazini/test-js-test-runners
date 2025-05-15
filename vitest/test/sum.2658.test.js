
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 32 to equal 78', () => {
  expect(sum(46, 32)).toBe(78);
});
