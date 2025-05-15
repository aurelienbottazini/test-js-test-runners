
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 9 to equal 11', () => {
  expect(sum(2, 9)).toBe(11);
});
