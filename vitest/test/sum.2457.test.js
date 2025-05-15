
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 98 to equal 156', () => {
  expect(sum(58, 98)).toBe(156);
});
