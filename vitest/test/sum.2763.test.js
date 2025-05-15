
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 89 to equal 157', () => {
  expect(sum(68, 89)).toBe(157);
});
