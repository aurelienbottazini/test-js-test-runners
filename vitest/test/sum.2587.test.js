
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 28 to equal 51', () => {
  expect(sum(23, 28)).toBe(51);
});
