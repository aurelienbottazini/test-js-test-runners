
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 6 to equal 75', () => {
  expect(sum(69, 6)).toBe(75);
});
