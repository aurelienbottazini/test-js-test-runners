
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 52 to equal 129', () => {
  expect(sum(77, 52)).toBe(129);
});
