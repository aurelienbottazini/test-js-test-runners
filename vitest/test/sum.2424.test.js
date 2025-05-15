
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 68 to equal 100', () => {
  expect(sum(32, 68)).toBe(100);
});
