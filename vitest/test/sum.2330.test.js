
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 53 to equal 98', () => {
  expect(sum(45, 53)).toBe(98);
});
