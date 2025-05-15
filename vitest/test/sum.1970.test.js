
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 42 to equal 92', () => {
  expect(sum(50, 42)).toBe(92);
});
