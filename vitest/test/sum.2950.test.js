
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 48 to equal 61', () => {
  expect(sum(13, 48)).toBe(61);
});
