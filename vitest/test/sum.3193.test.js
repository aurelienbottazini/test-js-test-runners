
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 45 to equal 134', () => {
  expect(sum(89, 45)).toBe(134);
});
