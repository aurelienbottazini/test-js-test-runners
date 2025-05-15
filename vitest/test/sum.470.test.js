
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 95 to equal 151', () => {
  expect(sum(56, 95)).toBe(151);
});
