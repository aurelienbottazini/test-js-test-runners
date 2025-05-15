
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 58 to equal 139', () => {
  expect(sum(81, 58)).toBe(139);
});
