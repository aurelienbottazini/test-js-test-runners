
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 26 to equal 36', () => {
  expect(sum(10, 26)).toBe(36);
});
