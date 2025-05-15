
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 45 to equal 97', () => {
  expect(sum(52, 45)).toBe(97);
});
