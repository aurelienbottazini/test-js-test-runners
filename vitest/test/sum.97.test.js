
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 85 to equal 103', () => {
  expect(sum(18, 85)).toBe(103);
});
