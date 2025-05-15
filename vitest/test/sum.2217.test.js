
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 12 to equal 36', () => {
  expect(sum(24, 12)).toBe(36);
});
