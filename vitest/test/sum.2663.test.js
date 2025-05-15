
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 45 to equal 90', () => {
  expect(sum(45, 45)).toBe(90);
});
