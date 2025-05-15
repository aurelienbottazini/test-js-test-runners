
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 95 to equal 137', () => {
  expect(sum(42, 95)).toBe(137);
});
