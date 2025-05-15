
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 53 to equal 53', () => {
  expect(sum(0, 53)).toBe(53);
});
