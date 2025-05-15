
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 49 to equal 55', () => {
  expect(sum(6, 49)).toBe(55);
});
