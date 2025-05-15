
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 79 to equal 103', () => {
  expect(sum(24, 79)).toBe(103);
});
