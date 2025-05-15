
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 77 to equal 129', () => {
  expect(sum(52, 77)).toBe(129);
});
