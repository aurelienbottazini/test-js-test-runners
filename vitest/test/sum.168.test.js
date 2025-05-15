
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 85 to equal 101', () => {
  expect(sum(16, 85)).toBe(101);
});
