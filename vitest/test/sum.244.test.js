
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 23 to equal 61', () => {
  expect(sum(38, 23)).toBe(61);
});
