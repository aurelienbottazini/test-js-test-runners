
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 43 to equal 107', () => {
  expect(sum(64, 43)).toBe(107);
});
