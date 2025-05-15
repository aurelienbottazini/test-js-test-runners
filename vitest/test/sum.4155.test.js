
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 68 to equal 129', () => {
  expect(sum(61, 68)).toBe(129);
});
