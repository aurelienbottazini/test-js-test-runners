
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 85 to equal 156', () => {
  expect(sum(71, 85)).toBe(156);
});
