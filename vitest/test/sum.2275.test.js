
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 68 to equal 103', () => {
  expect(sum(35, 68)).toBe(103);
});
