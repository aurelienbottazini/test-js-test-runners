
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 35 to equal 129', () => {
  expect(sum(94, 35)).toBe(129);
});
