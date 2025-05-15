
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 45 to equal 100', () => {
  expect(sum(55, 45)).toBe(100);
});
