
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 84 to equal 157', () => {
  expect(sum(73, 84)).toBe(157);
});
