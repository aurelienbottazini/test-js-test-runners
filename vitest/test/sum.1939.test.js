
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 35 to equal 36', () => {
  expect(sum(1, 35)).toBe(36);
});
