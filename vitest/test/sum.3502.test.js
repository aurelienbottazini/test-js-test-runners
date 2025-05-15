
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 54 to equal 56', () => {
  expect(sum(2, 54)).toBe(56);
});
