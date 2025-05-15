
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 41 to equal 137', () => {
  expect(sum(96, 41)).toBe(137);
});
