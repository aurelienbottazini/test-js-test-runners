
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 53 to equal 123', () => {
  expect(sum(70, 53)).toBe(123);
});
