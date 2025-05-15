
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 45 to equal 69', () => {
  expect(sum(24, 45)).toBe(69);
});
