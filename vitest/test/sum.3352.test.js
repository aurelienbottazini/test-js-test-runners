
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 16 to equal 97', () => {
  expect(sum(81, 16)).toBe(97);
});
