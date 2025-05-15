
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 80 to equal 103', () => {
  expect(sum(23, 80)).toBe(103);
});
