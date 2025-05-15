
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 1 to equal 5', () => {
  expect(sum(4, 1)).toBe(5);
});
