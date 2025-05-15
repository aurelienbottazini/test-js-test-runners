
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 10 to equal 61', () => {
  expect(sum(51, 10)).toBe(61);
});
