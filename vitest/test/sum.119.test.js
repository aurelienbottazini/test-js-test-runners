
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 90 to equal 108', () => {
  expect(sum(18, 90)).toBe(108);
});
