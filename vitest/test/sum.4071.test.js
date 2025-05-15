
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 14 to equal 97', () => {
  expect(sum(83, 14)).toBe(97);
});
