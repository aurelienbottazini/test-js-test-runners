
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 96 to equal 157', () => {
  expect(sum(61, 96)).toBe(157);
});
