
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 29 to equal 34', () => {
  expect(sum(5, 29)).toBe(34);
});
