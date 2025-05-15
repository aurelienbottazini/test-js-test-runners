
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 94 to equal 94', () => {
  expect(sum(0, 94)).toBe(94);
});
