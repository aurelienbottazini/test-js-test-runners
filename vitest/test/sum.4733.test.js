
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 95 to equal 97', () => {
  expect(sum(2, 95)).toBe(97);
});
