
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 92 to equal 128', () => {
  expect(sum(36, 92)).toBe(128);
});
