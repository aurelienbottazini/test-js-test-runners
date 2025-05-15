
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 98 to equal 128', () => {
  expect(sum(30, 98)).toBe(128);
});
