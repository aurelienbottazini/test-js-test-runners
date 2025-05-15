
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 5 to equal 34', () => {
  expect(sum(29, 5)).toBe(34);
});
