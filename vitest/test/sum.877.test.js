
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 23 to equal 51', () => {
  expect(sum(28, 23)).toBe(51);
});
