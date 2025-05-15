
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 39 to equal 51', () => {
  expect(sum(12, 39)).toBe(51);
});
