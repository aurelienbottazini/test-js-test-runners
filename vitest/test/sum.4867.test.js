
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 5 to equal 28', () => {
  expect(sum(23, 5)).toBe(28);
});
