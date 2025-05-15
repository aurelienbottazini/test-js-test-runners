
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 23 to equal 37', () => {
  expect(sum(14, 23)).toBe(37);
});
