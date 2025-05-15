
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 1 to equal 3', () => {
  expect(sum(2, 1)).toBe(3);
});
