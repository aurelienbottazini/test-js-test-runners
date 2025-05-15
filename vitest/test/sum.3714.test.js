
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 5 to equal 103', () => {
  expect(sum(98, 5)).toBe(103);
});
