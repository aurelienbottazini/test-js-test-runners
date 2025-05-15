
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 9 to equal 101', () => {
  expect(sum(92, 9)).toBe(101);
});
