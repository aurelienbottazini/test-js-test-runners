
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 25 to equal 102', () => {
  expect(sum(77, 25)).toBe(102);
});
