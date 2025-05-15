
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 80 to equal 129', () => {
  expect(sum(49, 80)).toBe(129);
});
