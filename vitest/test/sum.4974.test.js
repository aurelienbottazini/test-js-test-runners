
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 45 to equal 120', () => {
  expect(sum(75, 45)).toBe(120);
});
