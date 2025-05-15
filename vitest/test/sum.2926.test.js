
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 2 to equal 9', () => {
  expect(sum(7, 2)).toBe(9);
});
