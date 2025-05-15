
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 60 to equal 129', () => {
  expect(sum(69, 60)).toBe(129);
});
