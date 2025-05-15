
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 7 to equal 55', () => {
  expect(sum(48, 7)).toBe(55);
});
