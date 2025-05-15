
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 28 to equal 103', () => {
  expect(sum(75, 28)).toBe(103);
});
