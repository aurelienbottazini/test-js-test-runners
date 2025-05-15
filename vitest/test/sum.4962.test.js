
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 45 to equal 102', () => {
  expect(sum(57, 45)).toBe(102);
});
