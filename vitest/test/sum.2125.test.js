
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 94 to equal 107', () => {
  expect(sum(13, 94)).toBe(107);
});
