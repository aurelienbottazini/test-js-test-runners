
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 14 to equal 103', () => {
  expect(sum(89, 14)).toBe(103);
});
