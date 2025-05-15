
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 19 to equal 42', () => {
  expect(sum(23, 19)).toBe(42);
});
