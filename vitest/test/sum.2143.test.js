
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 72 to equal 128', () => {
  expect(sum(56, 72)).toBe(128);
});
