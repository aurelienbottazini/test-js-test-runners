
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 17 to equal 98', () => {
  expect(sum(81, 17)).toBe(98);
});
