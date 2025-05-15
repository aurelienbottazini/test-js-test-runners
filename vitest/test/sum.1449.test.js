
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 5 to equal 6', () => {
  expect(sum(1, 5)).toBe(6);
});
