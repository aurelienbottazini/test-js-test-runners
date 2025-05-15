
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 81 to equal 123', () => {
  expect(sum(42, 81)).toBe(123);
});
