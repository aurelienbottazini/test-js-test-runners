
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 99 to equal 168', () => {
  expect(sum(69, 99)).toBe(168);
});
