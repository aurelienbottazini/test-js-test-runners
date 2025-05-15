
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 47 to equal 107', () => {
  expect(sum(60, 47)).toBe(107);
});
