
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 99 to equal 131', () => {
  expect(sum(32, 99)).toBe(131);
});
