
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 53 to equal 92', () => {
  expect(sum(39, 53)).toBe(92);
});
