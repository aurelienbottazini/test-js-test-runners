
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 6 to equal 55', () => {
  expect(sum(49, 6)).toBe(55);
});
