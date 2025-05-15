
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 12 to equal 24', () => {
  expect(sum(12, 12)).toBe(24);
});
