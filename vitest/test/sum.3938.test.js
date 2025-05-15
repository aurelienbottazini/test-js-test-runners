
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 1 to equal 55', () => {
  expect(sum(54, 1)).toBe(55);
});
