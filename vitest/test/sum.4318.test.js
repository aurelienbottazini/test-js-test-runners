
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 83 to equal 156', () => {
  expect(sum(73, 83)).toBe(156);
});
