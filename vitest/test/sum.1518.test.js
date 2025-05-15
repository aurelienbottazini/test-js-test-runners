
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 83 to equal 114', () => {
  expect(sum(31, 83)).toBe(114);
});
