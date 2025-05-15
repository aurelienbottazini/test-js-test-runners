
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 9 to equal 36', () => {
  expect(sum(27, 9)).toBe(36);
});
