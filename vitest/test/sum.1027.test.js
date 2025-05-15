
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 45 to equal 52', () => {
  expect(sum(7, 45)).toBe(52);
});
