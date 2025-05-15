
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 1 to equal 34', () => {
  expect(sum(33, 1)).toBe(34);
});
