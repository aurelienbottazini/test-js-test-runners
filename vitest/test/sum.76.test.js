
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 48 to equal 129', () => {
  expect(sum(81, 48)).toBe(129);
});
