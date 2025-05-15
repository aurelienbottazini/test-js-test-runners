
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 72 to equal 157', () => {
  expect(sum(85, 72)).toBe(157);
});
