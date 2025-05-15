
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 45 to equal 75', () => {
  expect(sum(30, 45)).toBe(75);
});
