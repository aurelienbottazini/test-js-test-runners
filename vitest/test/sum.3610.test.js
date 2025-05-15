
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 5 to equal 97', () => {
  expect(sum(92, 5)).toBe(97);
});
