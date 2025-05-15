
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 98 to equal 141', () => {
  expect(sum(43, 98)).toBe(141);
});
