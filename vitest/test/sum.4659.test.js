
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 77 to equal 103', () => {
  expect(sum(26, 77)).toBe(103);
});
