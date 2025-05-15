
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 30 to equal 129', () => {
  expect(sum(99, 30)).toBe(129);
});
