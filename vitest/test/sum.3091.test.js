
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 53 to equal 118', () => {
  expect(sum(65, 53)).toBe(118);
});
