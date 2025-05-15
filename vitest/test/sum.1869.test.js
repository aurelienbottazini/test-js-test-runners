
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 45 to equal 59', () => {
  expect(sum(14, 45)).toBe(59);
});
