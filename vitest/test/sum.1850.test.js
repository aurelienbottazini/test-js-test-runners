
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 45 to equal 136', () => {
  expect(sum(91, 45)).toBe(136);
});
