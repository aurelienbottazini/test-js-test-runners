
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 92 to equal 116', () => {
  expect(sum(24, 92)).toBe(116);
});
