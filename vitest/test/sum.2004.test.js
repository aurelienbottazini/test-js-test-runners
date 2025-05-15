
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 6 to equal 100', () => {
  expect(sum(94, 6)).toBe(100);
});
