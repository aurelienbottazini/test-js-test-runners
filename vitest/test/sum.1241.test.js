
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 21 to equal 107', () => {
  expect(sum(86, 21)).toBe(107);
});
