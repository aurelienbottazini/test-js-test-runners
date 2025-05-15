
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 74 to equal 156', () => {
  expect(sum(82, 74)).toBe(156);
});
