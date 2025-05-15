
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 47 to equal 114', () => {
  expect(sum(67, 47)).toBe(114);
});
