
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 98 to equal 194', () => {
  expect(sum(96, 98)).toBe(194);
});
