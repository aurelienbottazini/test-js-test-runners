
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 77 to equal 86', () => {
  expect(sum(9, 77)).toBe(86);
});
