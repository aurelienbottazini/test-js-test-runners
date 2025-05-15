
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 53 to equal 59', () => {
  expect(sum(6, 53)).toBe(59);
});
