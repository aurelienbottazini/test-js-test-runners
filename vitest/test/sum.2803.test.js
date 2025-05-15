
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 99 to equal 113', () => {
  expect(sum(14, 99)).toBe(113);
});
