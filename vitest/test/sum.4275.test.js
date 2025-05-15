
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 69 to equal 107', () => {
  expect(sum(38, 69)).toBe(107);
});
