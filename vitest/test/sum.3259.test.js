
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 42 to equal 123', () => {
  expect(sum(81, 42)).toBe(123);
});
