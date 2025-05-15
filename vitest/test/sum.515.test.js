
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 84 to equal 107', () => {
  expect(sum(23, 84)).toBe(107);
});
