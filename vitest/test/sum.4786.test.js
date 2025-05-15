
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 16 to equal 55', () => {
  expect(sum(39, 16)).toBe(55);
});
