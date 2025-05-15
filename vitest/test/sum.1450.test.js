
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 41 to equal 61', () => {
  expect(sum(20, 41)).toBe(61);
});
