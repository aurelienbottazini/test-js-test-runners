
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 65 to equal 129', () => {
  expect(sum(64, 65)).toBe(129);
});
