
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 99 to equal 163', () => {
  expect(sum(64, 99)).toBe(163);
});
