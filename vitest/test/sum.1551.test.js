
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 64 to equal 100', () => {
  expect(sum(36, 64)).toBe(100);
});
