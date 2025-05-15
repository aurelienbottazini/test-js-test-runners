
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 85 to equal 128', () => {
  expect(sum(43, 85)).toBe(128);
});
