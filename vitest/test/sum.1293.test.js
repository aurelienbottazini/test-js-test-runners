
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 15 to equal 105', () => {
  expect(sum(90, 15)).toBe(105);
});
