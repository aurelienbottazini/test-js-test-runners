
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 98 to equal 124', () => {
  expect(sum(26, 98)).toBe(124);
});
