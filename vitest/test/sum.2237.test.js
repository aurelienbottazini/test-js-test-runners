
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 96 to equal 139', () => {
  expect(sum(43, 96)).toBe(139);
});
