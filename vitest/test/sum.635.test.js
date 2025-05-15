
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 98 to equal 113', () => {
  expect(sum(15, 98)).toBe(113);
});
