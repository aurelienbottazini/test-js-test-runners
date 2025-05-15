
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 69 to equal 102', () => {
  expect(sum(33, 69)).toBe(102);
});
