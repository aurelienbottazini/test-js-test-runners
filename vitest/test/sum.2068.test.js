
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 52 to equal 151', () => {
  expect(sum(99, 52)).toBe(151);
});
