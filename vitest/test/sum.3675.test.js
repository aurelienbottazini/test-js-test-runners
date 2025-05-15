
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 86 to equal 157', () => {
  expect(sum(71, 86)).toBe(157);
});
