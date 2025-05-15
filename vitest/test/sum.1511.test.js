
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 15 to equal 114', () => {
  expect(sum(99, 15)).toBe(114);
});
