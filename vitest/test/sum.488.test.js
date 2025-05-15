
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 58 to equal 156', () => {
  expect(sum(98, 58)).toBe(156);
});
