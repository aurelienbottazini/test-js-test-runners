
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 22 to equal 98', () => {
  expect(sum(76, 22)).toBe(98);
});
