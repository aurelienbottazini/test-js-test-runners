
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 1 to equal 65', () => {
  expect(sum(64, 1)).toBe(65);
});
