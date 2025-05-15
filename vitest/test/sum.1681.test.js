
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 28 to equal 64', () => {
  expect(sum(36, 28)).toBe(64);
});
