
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 45 to equal 99', () => {
  expect(sum(54, 45)).toBe(99);
});
