
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 52 to equal 75', () => {
  expect(sum(23, 52)).toBe(75);
});
