
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 77 to equal 82', () => {
  expect(sum(5, 77)).toBe(82);
});
