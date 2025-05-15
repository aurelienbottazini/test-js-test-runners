
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 11 to equal 107', () => {
  expect(sum(96, 11)).toBe(107);
});
