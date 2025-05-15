
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 42 to equal 94', () => {
  expect(sum(52, 42)).toBe(94);
});
