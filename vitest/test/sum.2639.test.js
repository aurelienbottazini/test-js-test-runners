
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 42 to equal 102', () => {
  expect(sum(60, 42)).toBe(102);
});
