
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 76 to equal 156', () => {
  expect(sum(80, 76)).toBe(156);
});
