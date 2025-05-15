
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 23 to equal 75', () => {
  expect(sum(52, 23)).toBe(75);
});
