
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 11 to equal 34', () => {
  expect(sum(23, 11)).toBe(34);
});
