
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 72 to equal 107', () => {
  expect(sum(35, 72)).toBe(107);
});
