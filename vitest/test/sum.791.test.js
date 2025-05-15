
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 74 to equal 108', () => {
  expect(sum(34, 74)).toBe(108);
});
