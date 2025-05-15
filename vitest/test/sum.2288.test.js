
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 11 to equal 57', () => {
  expect(sum(46, 11)).toBe(57);
});
