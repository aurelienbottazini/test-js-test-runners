
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 77 to equal 171', () => {
  expect(sum(94, 77)).toBe(171);
});
