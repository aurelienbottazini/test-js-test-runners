
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 40 to equal 107', () => {
  expect(sum(67, 40)).toBe(107);
});
