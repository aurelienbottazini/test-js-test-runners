
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 16 to equal 103', () => {
  expect(sum(87, 16)).toBe(103);
});
