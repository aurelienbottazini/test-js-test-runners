
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 83 to equal 103', () => {
  expect(sum(20, 83)).toBe(103);
});
