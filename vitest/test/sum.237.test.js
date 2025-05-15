
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 15 to equal 64', () => {
  expect(sum(49, 15)).toBe(64);
});
