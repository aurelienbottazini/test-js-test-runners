
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 75 to equal 97', () => {
  expect(sum(22, 75)).toBe(97);
});
