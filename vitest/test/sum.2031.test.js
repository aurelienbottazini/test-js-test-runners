
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 58 to equal 61', () => {
  expect(sum(3, 58)).toBe(61);
});
