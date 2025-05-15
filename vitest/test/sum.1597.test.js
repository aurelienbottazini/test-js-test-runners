
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 15 to equal 97', () => {
  expect(sum(82, 15)).toBe(97);
});
