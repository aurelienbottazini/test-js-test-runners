
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 38 to equal 75', () => {
  expect(sum(37, 38)).toBe(75);
});
