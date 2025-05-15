
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 50 to equal 92', () => {
  expect(sum(42, 50)).toBe(92);
});
