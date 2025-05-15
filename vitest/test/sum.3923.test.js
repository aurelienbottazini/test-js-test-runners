
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 60 to equal 103', () => {
  expect(sum(43, 60)).toBe(103);
});
