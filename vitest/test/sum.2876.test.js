
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 82 to equal 98', () => {
  expect(sum(16, 82)).toBe(98);
});
