
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 8 to equal 9', () => {
  expect(sum(1, 8)).toBe(9);
});
