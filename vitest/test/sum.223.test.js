
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 4 to equal 36', () => {
  expect(sum(32, 4)).toBe(36);
});
