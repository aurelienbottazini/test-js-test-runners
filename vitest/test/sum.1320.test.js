
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 6 to equal 36', () => {
  expect(sum(30, 6)).toBe(36);
});
