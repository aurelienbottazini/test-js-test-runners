
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 10 to equal 97', () => {
  expect(sum(87, 10)).toBe(97);
});
