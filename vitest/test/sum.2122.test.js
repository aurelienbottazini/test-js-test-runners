
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 93 to equal 156', () => {
  expect(sum(63, 93)).toBe(156);
});
