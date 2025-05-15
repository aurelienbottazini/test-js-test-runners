
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 78 to equal 157', () => {
  expect(sum(79, 78)).toBe(157);
});
