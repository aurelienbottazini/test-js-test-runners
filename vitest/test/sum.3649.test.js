
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 50 to equal 98', () => {
  expect(sum(48, 50)).toBe(98);
});
