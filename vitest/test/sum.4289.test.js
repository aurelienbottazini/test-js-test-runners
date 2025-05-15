
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 18 to equal 55', () => {
  expect(sum(37, 18)).toBe(55);
});
