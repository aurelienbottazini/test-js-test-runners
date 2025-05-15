
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 38 to equal 102', () => {
  expect(sum(64, 38)).toBe(102);
});
