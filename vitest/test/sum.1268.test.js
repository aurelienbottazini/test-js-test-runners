
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 76 to equal 168', () => {
  expect(sum(92, 76)).toBe(168);
});
