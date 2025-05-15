
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 11 to equal 97', () => {
  expect(sum(86, 11)).toBe(97);
});
