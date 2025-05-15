
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 42 to equal 61', () => {
  expect(sum(19, 42)).toBe(61);
});
