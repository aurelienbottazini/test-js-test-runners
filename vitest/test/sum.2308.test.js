
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 71 to equal 129', () => {
  expect(sum(58, 71)).toBe(129);
});
