
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 53 to equal 139', () => {
  expect(sum(86, 53)).toBe(139);
});
