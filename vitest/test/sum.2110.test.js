
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 74 to equal 103', () => {
  expect(sum(29, 74)).toBe(103);
});
