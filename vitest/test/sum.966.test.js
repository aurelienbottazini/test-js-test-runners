
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 75 to equal 174', () => {
  expect(sum(99, 75)).toBe(174);
});
