
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 31 to equal 129', () => {
  expect(sum(98, 31)).toBe(129);
});
