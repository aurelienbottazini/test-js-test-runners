
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 67 to equal 97', () => {
  expect(sum(30, 67)).toBe(97);
});
