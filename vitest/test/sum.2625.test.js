
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 95 to equal 107', () => {
  expect(sum(12, 95)).toBe(107);
});
