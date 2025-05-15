
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 45 to equal 74', () => {
  expect(sum(29, 45)).toBe(74);
});
