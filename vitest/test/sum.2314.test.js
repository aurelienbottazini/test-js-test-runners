
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 99 to equal 107', () => {
  expect(sum(8, 99)).toBe(107);
});
