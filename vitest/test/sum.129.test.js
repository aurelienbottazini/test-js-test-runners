
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 94 to equal 129', () => {
  expect(sum(35, 94)).toBe(129);
});
