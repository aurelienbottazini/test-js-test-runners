
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 53 to equal 65', () => {
  expect(sum(12, 53)).toBe(65);
});
