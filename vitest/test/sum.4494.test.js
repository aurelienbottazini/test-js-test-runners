
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 51 to equal 107', () => {
  expect(sum(56, 51)).toBe(107);
});
