
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 50 to equal 103', () => {
  expect(sum(53, 50)).toBe(103);
});
