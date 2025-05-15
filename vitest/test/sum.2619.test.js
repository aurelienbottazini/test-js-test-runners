
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 45 to equal 76', () => {
  expect(sum(31, 45)).toBe(76);
});
