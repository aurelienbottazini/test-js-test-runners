
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 59 to equal 75', () => {
  expect(sum(16, 59)).toBe(75);
});
