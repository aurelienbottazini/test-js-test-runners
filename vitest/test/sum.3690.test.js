
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 44 to equal 55', () => {
  expect(sum(11, 44)).toBe(55);
});
