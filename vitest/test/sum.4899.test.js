
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 12 to equal 51', () => {
  expect(sum(39, 12)).toBe(51);
});
