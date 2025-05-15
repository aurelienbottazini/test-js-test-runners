
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 41 to equal 98', () => {
  expect(sum(57, 41)).toBe(98);
});
