
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 9 to equal 86', () => {
  expect(sum(77, 9)).toBe(86);
});
