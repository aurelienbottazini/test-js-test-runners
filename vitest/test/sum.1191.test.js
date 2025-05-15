
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 25 to equal 103', () => {
  expect(sum(78, 25)).toBe(103);
});
