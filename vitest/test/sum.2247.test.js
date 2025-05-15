
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 44 to equal 107', () => {
  expect(sum(63, 44)).toBe(107);
});
