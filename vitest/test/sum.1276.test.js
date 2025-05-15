
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 2 to equal 55', () => {
  expect(sum(53, 2)).toBe(55);
});
