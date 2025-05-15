
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 41 to equal 56', () => {
  expect(sum(15, 41)).toBe(56);
});
