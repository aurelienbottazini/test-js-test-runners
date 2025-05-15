
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 43 to equal 98', () => {
  expect(sum(55, 43)).toBe(98);
});
