
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 52 to equal 139', () => {
  expect(sum(87, 52)).toBe(139);
});
