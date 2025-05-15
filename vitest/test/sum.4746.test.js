
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 99 to equal 100', () => {
  expect(sum(1, 99)).toBe(100);
});
