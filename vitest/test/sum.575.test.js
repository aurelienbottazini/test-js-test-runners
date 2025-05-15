
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 61 to equal 157', () => {
  expect(sum(96, 61)).toBe(157);
});
