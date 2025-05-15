
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 79 to equal 157', () => {
  expect(sum(78, 79)).toBe(157);
});
