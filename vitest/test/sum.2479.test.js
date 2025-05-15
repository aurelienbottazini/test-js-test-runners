
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 42 to equal 134', () => {
  expect(sum(92, 42)).toBe(134);
});
