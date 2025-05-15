
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 85 to equal 151', () => {
  expect(sum(66, 85)).toBe(151);
});
