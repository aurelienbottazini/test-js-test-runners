
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 40 to equal 75', () => {
  expect(sum(35, 40)).toBe(75);
});
