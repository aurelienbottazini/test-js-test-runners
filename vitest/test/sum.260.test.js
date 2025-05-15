
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 41 to equal 123', () => {
  expect(sum(82, 41)).toBe(123);
});
