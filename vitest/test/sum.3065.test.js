
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 28 to equal 98', () => {
  expect(sum(70, 28)).toBe(98);
});
