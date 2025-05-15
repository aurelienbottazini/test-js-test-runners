
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 53 to equal 138', () => {
  expect(sum(85, 53)).toBe(138);
});
