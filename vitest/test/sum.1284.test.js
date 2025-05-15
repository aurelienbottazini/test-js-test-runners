
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 98 to equal 154', () => {
  expect(sum(56, 98)).toBe(154);
});
