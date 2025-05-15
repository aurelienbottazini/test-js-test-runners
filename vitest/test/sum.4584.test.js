
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 53 to equal 54', () => {
  expect(sum(1, 53)).toBe(54);
});
