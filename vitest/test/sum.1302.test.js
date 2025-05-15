
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 63 to equal 129', () => {
  expect(sum(66, 63)).toBe(129);
});
