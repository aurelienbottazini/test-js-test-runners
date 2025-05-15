
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 2 to equal 44', () => {
  expect(sum(42, 2)).toBe(44);
});
