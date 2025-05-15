
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 48 to equal 124', () => {
  expect(sum(76, 48)).toBe(124);
});
