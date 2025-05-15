
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 4 to equal 34', () => {
  expect(sum(30, 4)).toBe(34);
});
