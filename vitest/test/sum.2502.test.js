
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 88 to equal 108', () => {
  expect(sum(20, 88)).toBe(108);
});
