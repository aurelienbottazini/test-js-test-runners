
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 18 to equal 97', () => {
  expect(sum(79, 18)).toBe(97);
});
