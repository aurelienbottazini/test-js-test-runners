
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 58 to equal 81', () => {
  expect(sum(23, 58)).toBe(81);
});
