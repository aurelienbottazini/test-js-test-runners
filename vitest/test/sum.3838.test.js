
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 63 to equal 102', () => {
  expect(sum(39, 63)).toBe(102);
});
