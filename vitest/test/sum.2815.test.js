
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 75 to equal 108', () => {
  expect(sum(33, 75)).toBe(108);
});
