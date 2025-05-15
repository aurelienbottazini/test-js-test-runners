
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 84 to equal 129', () => {
  expect(sum(45, 84)).toBe(129);
});
