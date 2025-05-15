
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 77 to equal 114', () => {
  expect(sum(37, 77)).toBe(114);
});
