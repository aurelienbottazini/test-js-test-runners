
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 64 to equal 94', () => {
  expect(sum(30, 64)).toBe(94);
});
