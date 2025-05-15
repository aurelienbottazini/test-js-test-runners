
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 48 to equal 101', () => {
  expect(sum(53, 48)).toBe(101);
});
