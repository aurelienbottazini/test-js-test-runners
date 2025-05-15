
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 66 to equal 139', () => {
  expect(sum(73, 66)).toBe(139);
});
