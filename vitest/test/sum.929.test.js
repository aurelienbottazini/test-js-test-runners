
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 3 to equal 102', () => {
  expect(sum(99, 3)).toBe(102);
});
