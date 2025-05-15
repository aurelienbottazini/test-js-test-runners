
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 5 to equal 37', () => {
  expect(sum(32, 5)).toBe(37);
});
