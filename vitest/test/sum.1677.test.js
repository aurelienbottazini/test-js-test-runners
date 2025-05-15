
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 26 to equal 72', () => {
  expect(sum(46, 26)).toBe(72);
});
