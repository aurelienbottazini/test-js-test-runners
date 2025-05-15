
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 48 to equal 55', () => {
  expect(sum(7, 48)).toBe(55);
});
