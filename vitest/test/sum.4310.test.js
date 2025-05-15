
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 67 to equal 129', () => {
  expect(sum(62, 67)).toBe(129);
});
