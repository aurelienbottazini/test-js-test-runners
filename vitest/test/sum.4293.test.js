
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 44 to equal 139', () => {
  expect(sum(95, 44)).toBe(139);
});
