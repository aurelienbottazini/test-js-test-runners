
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 91 to equal 108', () => {
  expect(sum(17, 91)).toBe(108);
});
