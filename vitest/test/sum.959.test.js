
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 21 to equal 67', () => {
  expect(sum(46, 21)).toBe(67);
});
