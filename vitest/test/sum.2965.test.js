
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 94 to equal 101', () => {
  expect(sum(7, 94)).toBe(101);
});
