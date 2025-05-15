
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 57 to equal 139', () => {
  expect(sum(82, 57)).toBe(139);
});
