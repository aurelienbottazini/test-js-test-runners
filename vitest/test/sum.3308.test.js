
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 2 to equal 94', () => {
  expect(sum(92, 2)).toBe(94);
});
