
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 99 to equal 160', () => {
  expect(sum(61, 99)).toBe(160);
});
