
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 44 to equal 108', () => {
  expect(sum(64, 44)).toBe(108);
});
