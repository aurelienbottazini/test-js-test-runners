
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 75 to equal 151', () => {
  expect(sum(76, 75)).toBe(151);
});
