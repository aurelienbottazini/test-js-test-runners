
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 6 to equal 9', () => {
  expect(sum(3, 6)).toBe(9);
});
