
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 33 to equal 36', () => {
  expect(sum(3, 33)).toBe(36);
});
