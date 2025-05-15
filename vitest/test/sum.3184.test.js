
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 98 to equal 174', () => {
  expect(sum(76, 98)).toBe(174);
});
