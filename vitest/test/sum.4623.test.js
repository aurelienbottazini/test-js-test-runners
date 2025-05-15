
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 91 to equal 139', () => {
  expect(sum(48, 91)).toBe(139);
});
