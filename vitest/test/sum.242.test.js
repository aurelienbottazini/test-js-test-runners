
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 13 to equal 105', () => {
  expect(sum(92, 13)).toBe(105);
});
