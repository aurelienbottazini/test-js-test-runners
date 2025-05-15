
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 43 to equal 55', () => {
  expect(sum(12, 43)).toBe(55);
});
