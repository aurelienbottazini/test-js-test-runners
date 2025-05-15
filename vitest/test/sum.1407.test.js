
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 53 to equal 75', () => {
  expect(sum(22, 53)).toBe(75);
});
