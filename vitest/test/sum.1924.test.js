
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 61 to equal 97', () => {
  expect(sum(36, 61)).toBe(97);
});
