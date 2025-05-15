
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 41 to equal 118', () => {
  expect(sum(77, 41)).toBe(118);
});
