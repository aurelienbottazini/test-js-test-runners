
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 94 to equal 100', () => {
  expect(sum(6, 94)).toBe(100);
});
