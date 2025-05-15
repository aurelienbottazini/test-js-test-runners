
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 29 to equal 36', () => {
  expect(sum(7, 29)).toBe(36);
});
