
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 81 to equal 157', () => {
  expect(sum(76, 81)).toBe(157);
});
