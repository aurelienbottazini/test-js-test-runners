
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 47 to equal 80', () => {
  expect(sum(33, 47)).toBe(80);
});
