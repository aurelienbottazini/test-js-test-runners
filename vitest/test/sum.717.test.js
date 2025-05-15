
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 82 to equal 105', () => {
  expect(sum(23, 82)).toBe(105);
});
