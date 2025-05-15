
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 41 to equal 97', () => {
  expect(sum(56, 41)).toBe(97);
});
