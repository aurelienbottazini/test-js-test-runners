
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 84 to equal 108', () => {
  expect(sum(24, 84)).toBe(108);
});
