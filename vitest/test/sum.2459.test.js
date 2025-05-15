
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 65 to equal 156', () => {
  expect(sum(91, 65)).toBe(156);
});
