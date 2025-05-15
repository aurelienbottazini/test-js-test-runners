
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 71 to equal 157', () => {
  expect(sum(86, 71)).toBe(157);
});
