
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 53 to equal 61', () => {
  expect(sum(8, 53)).toBe(61);
});
