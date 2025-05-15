
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 11 to equal 75', () => {
  expect(sum(64, 11)).toBe(75);
});
