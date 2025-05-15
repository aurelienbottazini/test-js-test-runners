
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 92 to equal 123', () => {
  expect(sum(31, 92)).toBe(123);
});
