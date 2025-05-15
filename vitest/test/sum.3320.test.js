
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 35 to equal 42', () => {
  expect(sum(7, 35)).toBe(42);
});
