
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 45 to equal 55', () => {
  expect(sum(10, 45)).toBe(55);
});
