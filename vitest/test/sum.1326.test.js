
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 55 to equal 113', () => {
  expect(sum(58, 55)).toBe(113);
});
