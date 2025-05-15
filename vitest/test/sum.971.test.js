
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 27 to equal 83', () => {
  expect(sum(56, 27)).toBe(83);
});
