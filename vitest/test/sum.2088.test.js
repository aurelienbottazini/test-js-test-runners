
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 96 to equal 156', () => {
  expect(sum(60, 96)).toBe(156);
});
