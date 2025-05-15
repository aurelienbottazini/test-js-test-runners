
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 17 to equal 108', () => {
  expect(sum(91, 17)).toBe(108);
});
