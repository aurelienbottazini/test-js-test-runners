
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 8 to equal 56', () => {
  expect(sum(48, 8)).toBe(56);
});
