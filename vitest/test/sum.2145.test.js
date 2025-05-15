
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 47 to equal 71', () => {
  expect(sum(24, 47)).toBe(71);
});
