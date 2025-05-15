
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 49 to equal 129', () => {
  expect(sum(80, 49)).toBe(129);
});
