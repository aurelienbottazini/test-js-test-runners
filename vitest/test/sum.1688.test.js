
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 22 to equal 55', () => {
  expect(sum(33, 22)).toBe(55);
});
