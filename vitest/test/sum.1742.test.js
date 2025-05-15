
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 30 to equal 46', () => {
  expect(sum(16, 30)).toBe(46);
});
