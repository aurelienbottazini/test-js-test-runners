
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 70 to equal 139', () => {
  expect(sum(69, 70)).toBe(139);
});
