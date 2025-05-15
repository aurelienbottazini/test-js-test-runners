
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 22 to equal 107', () => {
  expect(sum(85, 22)).toBe(107);
});
