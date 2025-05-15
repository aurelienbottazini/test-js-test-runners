
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 68 to equal 108', () => {
  expect(sum(40, 68)).toBe(108);
});
