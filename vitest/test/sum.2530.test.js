
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 88 to equal 107', () => {
  expect(sum(19, 88)).toBe(107);
});
