
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 28 to equal 58', () => {
  expect(sum(30, 28)).toBe(58);
});
