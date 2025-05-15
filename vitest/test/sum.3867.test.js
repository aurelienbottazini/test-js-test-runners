
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 44 to equal 100', () => {
  expect(sum(56, 44)).toBe(100);
});
