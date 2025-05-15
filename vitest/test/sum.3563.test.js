
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 42 to equal 81', () => {
  expect(sum(39, 42)).toBe(81);
});
