
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 68 to equal 98', () => {
  expect(sum(30, 68)).toBe(98);
});
