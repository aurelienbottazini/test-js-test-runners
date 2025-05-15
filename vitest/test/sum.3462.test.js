
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 92 to equal 108', () => {
  expect(sum(16, 92)).toBe(108);
});
