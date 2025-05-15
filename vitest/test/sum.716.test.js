
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 22 to equal 103', () => {
  expect(sum(81, 22)).toBe(103);
});
