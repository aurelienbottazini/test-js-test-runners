
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 1 to equal 8', () => {
  expect(sum(7, 1)).toBe(8);
});
