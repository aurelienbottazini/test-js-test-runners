
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 53 to equal 90', () => {
  expect(sum(37, 53)).toBe(90);
});
