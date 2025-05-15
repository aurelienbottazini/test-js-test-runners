
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 70 to equal 157', () => {
  expect(sum(87, 70)).toBe(157);
});
