
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 25 to equal 64', () => {
  expect(sum(39, 25)).toBe(64);
});
