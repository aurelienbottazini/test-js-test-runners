
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 78 to equal 103', () => {
  expect(sum(25, 78)).toBe(103);
});
