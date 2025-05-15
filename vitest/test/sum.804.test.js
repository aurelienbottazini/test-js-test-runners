
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 45 to equal 45', () => {
  expect(sum(0, 45)).toBe(45);
});
