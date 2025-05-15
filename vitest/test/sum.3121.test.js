
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 74 to equal 98', () => {
  expect(sum(24, 74)).toBe(98);
});
