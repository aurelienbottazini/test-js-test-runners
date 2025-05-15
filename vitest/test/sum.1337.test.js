
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 14 to equal 60', () => {
  expect(sum(46, 14)).toBe(60);
});
