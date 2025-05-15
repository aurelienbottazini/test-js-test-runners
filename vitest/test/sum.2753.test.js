
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 90 to equal 107', () => {
  expect(sum(17, 90)).toBe(107);
});
