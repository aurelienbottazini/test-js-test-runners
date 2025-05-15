
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 6 to equal 103', () => {
  expect(sum(97, 6)).toBe(103);
});
