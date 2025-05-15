
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 15 to equal 75', () => {
  expect(sum(60, 15)).toBe(75);
});
