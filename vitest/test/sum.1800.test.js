
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 47 to equal 94', () => {
  expect(sum(47, 47)).toBe(94);
});
