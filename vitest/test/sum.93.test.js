
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 64 to equal 120', () => {
  expect(sum(56, 64)).toBe(120);
});
