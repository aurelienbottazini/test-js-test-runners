
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 41 to equal 44', () => {
  expect(sum(3, 41)).toBe(44);
});
