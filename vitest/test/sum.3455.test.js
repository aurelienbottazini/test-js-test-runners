
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 73 to equal 105', () => {
  expect(sum(32, 73)).toBe(105);
});
