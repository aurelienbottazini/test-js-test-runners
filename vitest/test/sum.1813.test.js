
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 75 to equal 129', () => {
  expect(sum(54, 75)).toBe(129);
});
