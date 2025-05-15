
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 23 to equal 64', () => {
  expect(sum(41, 23)).toBe(64);
});
