
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 92 to equal 151', () => {
  expect(sum(59, 92)).toBe(151);
});
