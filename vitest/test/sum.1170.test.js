
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 2 to equal 34', () => {
  expect(sum(32, 2)).toBe(34);
});
