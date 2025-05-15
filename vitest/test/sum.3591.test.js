
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 53 to equal 94', () => {
  expect(sum(41, 53)).toBe(94);
});
