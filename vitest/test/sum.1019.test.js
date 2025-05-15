
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 45 to equal 129', () => {
  expect(sum(84, 45)).toBe(129);
});
