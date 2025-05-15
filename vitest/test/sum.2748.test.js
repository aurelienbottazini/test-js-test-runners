
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 12 to equal 56', () => {
  expect(sum(44, 12)).toBe(56);
});
