
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 47 to equal 128', () => {
  expect(sum(81, 47)).toBe(128);
});
