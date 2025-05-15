
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 59 to equal 107', () => {
  expect(sum(48, 59)).toBe(107);
});
