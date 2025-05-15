
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 8 to equal 107', () => {
  expect(sum(99, 8)).toBe(107);
});
