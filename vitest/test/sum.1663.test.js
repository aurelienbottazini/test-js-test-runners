
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 33 to equal 56', () => {
  expect(sum(23, 33)).toBe(56);
});
