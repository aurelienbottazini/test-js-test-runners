
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 77 to equal 102', () => {
  expect(sum(25, 77)).toBe(102);
});
