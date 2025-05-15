
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 76 to equal 103', () => {
  expect(sum(27, 76)).toBe(103);
});
