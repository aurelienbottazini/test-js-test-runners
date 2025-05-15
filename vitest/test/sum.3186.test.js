
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 61 to equal 138', () => {
  expect(sum(77, 61)).toBe(138);
});
