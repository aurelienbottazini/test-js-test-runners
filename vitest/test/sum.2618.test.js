
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 41 to equal 71', () => {
  expect(sum(30, 41)).toBe(71);
});
