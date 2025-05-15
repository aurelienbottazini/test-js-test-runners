
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 47 to equal 51', () => {
  expect(sum(4, 47)).toBe(51);
});
