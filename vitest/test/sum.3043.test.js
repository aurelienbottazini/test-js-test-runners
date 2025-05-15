
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 54 to equal 98', () => {
  expect(sum(44, 54)).toBe(98);
});
