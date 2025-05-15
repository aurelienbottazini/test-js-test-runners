
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 45 to equal 71', () => {
  expect(sum(26, 45)).toBe(71);
});
