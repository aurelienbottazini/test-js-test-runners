
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 42 to equal 86', () => {
  expect(sum(44, 42)).toBe(86);
});
