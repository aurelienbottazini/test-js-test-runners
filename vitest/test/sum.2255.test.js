
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 53 to equal 105', () => {
  expect(sum(52, 53)).toBe(105);
});
