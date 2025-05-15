
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 26 to equal 107', () => {
  expect(sum(81, 26)).toBe(107);
});
