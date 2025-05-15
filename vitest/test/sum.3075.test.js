
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 30 to equal 76', () => {
  expect(sum(46, 30)).toBe(76);
});
