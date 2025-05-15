
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 92 to equal 160', () => {
  expect(sum(68, 92)).toBe(160);
});
