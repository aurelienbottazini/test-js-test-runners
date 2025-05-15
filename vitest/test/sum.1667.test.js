
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 73 to equal 129', () => {
  expect(sum(56, 73)).toBe(129);
});
