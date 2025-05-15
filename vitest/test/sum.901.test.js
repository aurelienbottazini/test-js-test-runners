
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 78 to equal 156', () => {
  expect(sum(78, 78)).toBe(156);
});
