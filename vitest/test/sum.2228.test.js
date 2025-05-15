
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 5 to equal 101', () => {
  expect(sum(96, 5)).toBe(101);
});
