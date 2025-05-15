
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 76 to equal 98', () => {
  expect(sum(22, 76)).toBe(98);
});
