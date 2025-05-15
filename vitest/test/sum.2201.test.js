
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 44 to equal 98', () => {
  expect(sum(54, 44)).toBe(98);
});
