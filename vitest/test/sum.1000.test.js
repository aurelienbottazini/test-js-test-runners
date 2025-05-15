
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 56 to equal 129', () => {
  expect(sum(73, 56)).toBe(129);
});
