
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 82 to equal 139', () => {
  expect(sum(57, 82)).toBe(139);
});
