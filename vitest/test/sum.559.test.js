
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 86 to equal 129', () => {
  expect(sum(43, 86)).toBe(129);
});
