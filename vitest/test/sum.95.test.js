
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 45 to equal 106', () => {
  expect(sum(61, 45)).toBe(106);
});
