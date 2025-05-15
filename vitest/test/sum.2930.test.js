
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 6 to equal 82', () => {
  expect(sum(76, 6)).toBe(82);
});
