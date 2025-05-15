
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 58 to equal 82', () => {
  expect(sum(24, 58)).toBe(82);
});
