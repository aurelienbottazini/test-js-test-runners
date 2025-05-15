
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 71 to equal 107', () => {
  expect(sum(36, 71)).toBe(107);
});
