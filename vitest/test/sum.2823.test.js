
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 33 to equal 46', () => {
  expect(sum(13, 33)).toBe(46);
});
