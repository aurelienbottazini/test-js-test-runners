
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 9 to equal 10', () => {
  expect(sum(1, 9)).toBe(10);
});
