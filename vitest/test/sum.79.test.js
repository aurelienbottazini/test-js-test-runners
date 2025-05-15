
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 53 to equal 114', () => {
  expect(sum(61, 53)).toBe(114);
});
