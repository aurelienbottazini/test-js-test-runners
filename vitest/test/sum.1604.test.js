
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 73 to equal 151', () => {
  expect(sum(78, 73)).toBe(151);
});
