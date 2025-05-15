
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 72 to equal 108', () => {
  expect(sum(36, 72)).toBe(108);
});
