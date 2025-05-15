
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 56 to equal 120', () => {
  expect(sum(64, 56)).toBe(120);
});
