
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 95 to equal 156', () => {
  expect(sum(61, 95)).toBe(156);
});
