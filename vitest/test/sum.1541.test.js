
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 33 to equal 107', () => {
  expect(sum(74, 33)).toBe(107);
});
