
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 96 to equal 97', () => {
  expect(sum(1, 96)).toBe(97);
});
