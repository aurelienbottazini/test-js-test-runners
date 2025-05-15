
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 65 to equal 139', () => {
  expect(sum(74, 65)).toBe(139);
});
