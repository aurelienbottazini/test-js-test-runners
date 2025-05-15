
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 60 to equal 102', () => {
  expect(sum(42, 60)).toBe(102);
});
