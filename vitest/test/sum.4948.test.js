
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 9 to equal 34', () => {
  expect(sum(25, 9)).toBe(34);
});
