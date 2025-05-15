
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 38 to equal 101', () => {
  expect(sum(63, 38)).toBe(101);
});
