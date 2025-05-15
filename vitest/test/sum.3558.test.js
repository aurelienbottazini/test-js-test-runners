
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 62 to equal 157', () => {
  expect(sum(95, 62)).toBe(157);
});
