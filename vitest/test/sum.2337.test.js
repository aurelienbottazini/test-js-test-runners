
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 73 to equal 82', () => {
  expect(sum(9, 73)).toBe(82);
});
