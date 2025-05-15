
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 41 to equal 102', () => {
  expect(sum(61, 41)).toBe(102);
});
