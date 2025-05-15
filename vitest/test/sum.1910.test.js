
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 50 to equal 64', () => {
  expect(sum(14, 50)).toBe(64);
});
