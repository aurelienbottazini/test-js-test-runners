
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 56 to equal 114', () => {
  expect(sum(58, 56)).toBe(114);
});
