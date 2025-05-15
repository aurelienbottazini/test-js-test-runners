
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 23 to equal 97', () => {
  expect(sum(74, 23)).toBe(97);
});
