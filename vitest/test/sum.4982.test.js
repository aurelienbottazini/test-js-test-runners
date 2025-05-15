
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 53 to equal 111', () => {
  expect(sum(58, 53)).toBe(111);
});
