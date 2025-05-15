
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 42 to equal 97', () => {
  expect(sum(55, 42)).toBe(97);
});
