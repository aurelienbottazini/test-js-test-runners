
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 93 to equal 151', () => {
  expect(sum(58, 93)).toBe(151);
});
