
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 48 to equal 56', () => {
  expect(sum(8, 48)).toBe(56);
});
