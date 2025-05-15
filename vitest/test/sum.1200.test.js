
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 86 to equal 128', () => {
  expect(sum(42, 86)).toBe(128);
});
