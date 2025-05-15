
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 62 to equal 103', () => {
  expect(sum(41, 62)).toBe(103);
});
