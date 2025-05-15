
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 55 to equal 83', () => {
  expect(sum(28, 55)).toBe(83);
});
