
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 69 to equal 101', () => {
  expect(sum(32, 69)).toBe(101);
});
