
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 87 to equal 156', () => {
  expect(sum(69, 87)).toBe(156);
});
