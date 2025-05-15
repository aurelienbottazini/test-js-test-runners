
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 45 to equal 92', () => {
  expect(sum(47, 45)).toBe(92);
});
