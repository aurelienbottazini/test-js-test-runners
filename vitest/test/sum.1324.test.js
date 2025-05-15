
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 45 to equal 80', () => {
  expect(sum(35, 45)).toBe(80);
});
