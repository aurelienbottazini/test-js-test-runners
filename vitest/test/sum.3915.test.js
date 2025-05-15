
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 58 to equal 107', () => {
  expect(sum(49, 58)).toBe(107);
});
