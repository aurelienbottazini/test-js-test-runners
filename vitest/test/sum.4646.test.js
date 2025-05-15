
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 8 to equal 11', () => {
  expect(sum(3, 8)).toBe(11);
});
