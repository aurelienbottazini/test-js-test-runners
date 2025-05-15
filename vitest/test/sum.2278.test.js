
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 9 to equal 103', () => {
  expect(sum(94, 9)).toBe(103);
});
