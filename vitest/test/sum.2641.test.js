
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 97 to equal 103', () => {
  expect(sum(6, 97)).toBe(103);
});
