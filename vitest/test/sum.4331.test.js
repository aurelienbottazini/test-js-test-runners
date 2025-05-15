
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 32 to equal 36', () => {
  expect(sum(4, 32)).toBe(36);
});
