
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 93 to equal 107', () => {
  expect(sum(14, 93)).toBe(107);
});
