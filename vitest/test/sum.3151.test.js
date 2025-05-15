
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 86 to equal 139', () => {
  expect(sum(53, 86)).toBe(139);
});
