
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 92 to equal 104', () => {
  expect(sum(12, 92)).toBe(104);
});
