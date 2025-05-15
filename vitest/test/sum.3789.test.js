
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 42 to equal 44', () => {
  expect(sum(2, 42)).toBe(44);
});
