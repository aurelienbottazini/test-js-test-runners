
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 29 to equal 61', () => {
  expect(sum(32, 29)).toBe(61);
});
