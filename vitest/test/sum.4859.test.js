
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 31 to equal 42', () => {
  expect(sum(11, 31)).toBe(42);
});
