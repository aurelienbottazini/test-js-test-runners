
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 45 to equal 144', () => {
  expect(sum(99, 45)).toBe(144);
});
