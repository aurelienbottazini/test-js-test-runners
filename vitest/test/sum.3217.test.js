
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 91 to equal 168', () => {
  expect(sum(77, 91)).toBe(168);
});
