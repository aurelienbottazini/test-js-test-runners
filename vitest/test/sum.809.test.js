
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 90 to equal 129', () => {
  expect(sum(39, 90)).toBe(129);
});
