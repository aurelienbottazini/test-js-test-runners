
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 50 to equal 56', () => {
  expect(sum(6, 50)).toBe(56);
});
