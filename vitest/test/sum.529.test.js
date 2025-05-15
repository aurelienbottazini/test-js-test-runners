
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});
