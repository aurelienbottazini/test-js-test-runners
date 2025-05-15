
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 95 to equal 194', () => {
  expect(sum(99, 95)).toBe(194);
});
