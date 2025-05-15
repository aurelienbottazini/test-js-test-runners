
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 18 to equal 61', () => {
  expect(sum(43, 18)).toBe(61);
});
