
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 33 to equal 34', () => {
  expect(sum(1, 33)).toBe(34);
});
