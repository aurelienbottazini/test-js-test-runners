
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 13 to equal 98', () => {
  expect(sum(85, 13)).toBe(98);
});
