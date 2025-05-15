
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 92 to equal 113', () => {
  expect(sum(21, 92)).toBe(113);
});
