
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 45 to equal 66', () => {
  expect(sum(21, 45)).toBe(66);
});
