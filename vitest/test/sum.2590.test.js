
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 50 to equal 128', () => {
  expect(sum(78, 50)).toBe(128);
});
