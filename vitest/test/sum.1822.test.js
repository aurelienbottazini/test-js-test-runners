
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 23 to equal 36', () => {
  expect(sum(13, 23)).toBe(36);
});
