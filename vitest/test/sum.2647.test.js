
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 91 to equal 156', () => {
  expect(sum(65, 91)).toBe(156);
});
