
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 2 to equal 97', () => {
  expect(sum(95, 2)).toBe(97);
});
