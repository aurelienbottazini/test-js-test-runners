
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 11 to equal 103', () => {
  expect(sum(92, 11)).toBe(103);
});
