
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 85 to equal 139', () => {
  expect(sum(54, 85)).toBe(139);
});
