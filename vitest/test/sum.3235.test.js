
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 47 to equal 99', () => {
  expect(sum(52, 47)).toBe(99);
});
