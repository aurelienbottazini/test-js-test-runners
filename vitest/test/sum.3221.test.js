
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 48 to equal 75', () => {
  expect(sum(27, 48)).toBe(75);
});
