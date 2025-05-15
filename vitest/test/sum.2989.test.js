
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 83 to equal 107', () => {
  expect(sum(24, 83)).toBe(107);
});
