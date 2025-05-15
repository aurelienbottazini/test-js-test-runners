
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 93 to equal 103', () => {
  expect(sum(10, 93)).toBe(103);
});
