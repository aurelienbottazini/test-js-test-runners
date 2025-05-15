
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 41 to equal 75', () => {
  expect(sum(34, 41)).toBe(75);
});
