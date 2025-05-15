
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 94 to equal 157', () => {
  expect(sum(63, 94)).toBe(157);
});
