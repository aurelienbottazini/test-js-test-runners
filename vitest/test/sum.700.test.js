
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 17 to equal 75', () => {
  expect(sum(58, 17)).toBe(75);
});
