
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 46 to equal 107', () => {
  expect(sum(61, 46)).toBe(107);
});
