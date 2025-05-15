
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 45 to equal 94', () => {
  expect(sum(49, 45)).toBe(94);
});
