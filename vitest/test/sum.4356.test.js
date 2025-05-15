
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 20 to equal 42', () => {
  expect(sum(22, 20)).toBe(42);
});
