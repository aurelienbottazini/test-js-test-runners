
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 34 to equal 103', () => {
  expect(sum(69, 34)).toBe(103);
});
