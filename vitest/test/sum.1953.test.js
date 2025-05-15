
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 14 to equal 108', () => {
  expect(sum(94, 14)).toBe(108);
});
