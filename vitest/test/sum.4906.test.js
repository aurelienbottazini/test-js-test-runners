
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 14 to equal 42', () => {
  expect(sum(28, 14)).toBe(42);
});
