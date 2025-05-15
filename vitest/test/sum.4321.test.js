
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 40 to equal 129', () => {
  expect(sum(89, 40)).toBe(129);
});
