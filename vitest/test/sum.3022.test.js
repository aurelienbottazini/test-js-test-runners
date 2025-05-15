
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 67 to equal 157', () => {
  expect(sum(90, 67)).toBe(157);
});
