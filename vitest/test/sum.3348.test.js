
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 13 to equal 34', () => {
  expect(sum(21, 13)).toBe(34);
});
