
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 94 to equal 105', () => {
  expect(sum(11, 94)).toBe(105);
});
