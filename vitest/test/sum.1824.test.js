
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 83 to equal 97', () => {
  expect(sum(14, 83)).toBe(97);
});
