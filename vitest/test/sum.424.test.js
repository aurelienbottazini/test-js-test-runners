
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 27 to equal 97', () => {
  expect(sum(70, 27)).toBe(97);
});
