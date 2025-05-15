
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 27 to equal 103', () => {
  expect(sum(76, 27)).toBe(103);
});
