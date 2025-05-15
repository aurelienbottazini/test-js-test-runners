
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 87 to equal 98', () => {
  expect(sum(11, 87)).toBe(98);
});
