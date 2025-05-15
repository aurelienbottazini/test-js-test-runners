
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 5 to equal 104', () => {
  expect(sum(99, 5)).toBe(104);
});
