
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 53 to equal 101', () => {
  expect(sum(48, 53)).toBe(101);
});
